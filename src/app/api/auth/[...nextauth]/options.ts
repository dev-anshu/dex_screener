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
                 
            }
        })
    ]
}