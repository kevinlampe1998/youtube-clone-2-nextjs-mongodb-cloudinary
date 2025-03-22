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
            'This email address is unknown.', success: 1, existing: 0 };

        const error = { message:
            'This email address is existing', success: 0, existing: 1 };

        const result = foundEmail ? error : success;

        return NextResponse.json( result );
        
    } catch(err) {

        console.log('Error src/app/backend/users/single/check-if-exists/route.js', err);
        return NextResponse.json({ message: 'hello frontend' });
        
    }
};