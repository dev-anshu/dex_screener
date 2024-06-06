import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'; 

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        // validate user from finding user info from db
        let user;

        if(!user) {
            return NextResponse.json({error: "User does not exists"}, {status: 400});
        }
        console.log("User Exists");
        const validPassword = await bcryptjs.compare(password, user.password);
        
        if(!validPassword) {
            return NextResponse.json({error: "Wrong Credentials! "}, {status: 400});
        }

        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}