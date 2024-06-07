import { NextAuthOptions  } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email", type: "text",
                    placeholder: "joe.doe@xyz.com"
                },
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any): Promise<any> {
                try{
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                    });
                    if(!user) {
                        throw new Error('No User found with this email')
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                    if(isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Incorrect Password")
                    }
                } catch(error:any) {
                    throw new Error(error);
                }
            }
        })
    ],
    callbacks: {
        async session({session, token}) {
            session.user = token.user;
            return session;
        },
        async jwt({token, user}) {
            if(user) token.user = user;
            return token;
        }
    },
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/signin',
        error: '/signin'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.TOKEN_SECRET
}