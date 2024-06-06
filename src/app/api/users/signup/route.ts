import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'; 



export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        // get user from db
        
        if(user) {
            return NextResponse.json({error: "User already exists"}, {status:400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Save user into DB
        let savedUser;
        return NextResponse.json({message: "User registered successfully", success: true, savedUser})
    } catch(error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}