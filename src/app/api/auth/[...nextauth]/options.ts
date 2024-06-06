import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Email from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                Email: {
                    label: "Email", type: "text",
                    placeholder: "joe.doe@xyz.com"
                },
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any): Promise<any> {
                // Connect DB
                try{
                    // find user
                    let user;

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
            return session;
        },
        async jwt({token, user}) {
            return token;
        }
    },
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.TOKEN_SECRET
}