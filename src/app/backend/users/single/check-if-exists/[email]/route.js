import { NextResponse } from "next/server";
import connectMongo from "@/lib/connectMongo";
import User from "@/models/User";

export const GET = async (req, { params }) => {
    try {

        await connectMongo();

        const { email } = await params;
        console.log('email', email);

        const foundEmail = await User.findOne({ emailAddress: email });
        console.log('foundEmail', foundEmail);

        const success = { message:
            'This email address is available. You can use it.', success: 1 };

        const error = { message:
            'This email address is already taken. Please choose another one.', success: 0 };

        const result = foundEmail ? error : success;

        return NextResponse.json( result );
        
    } catch(err) {

        console.log('Error src/app/backend/users/single/check-if-exists/route.js', err);
        return NextResponse.json({ message: 'hello frontend' });
        
    }
};