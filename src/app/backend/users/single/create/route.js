import { NextResponse } from "next/server";
import connectMongo from "@/lib/connectMongo";
import User from "@/models/User";

export const POST = async (req) => {
    try {

        await connectMongo();

        const body = await req.json();

        console.log('body', body);

        const newUser = new User(body);
        console.log('newUser', newUser);

        const savedUser = await newUser.save();
        console.log('savedUser', savedUser);

        savedUser.password = undefined;

        const res = NextResponse.json({ message: 'You are successful registered!', success: 1, savedUser });

        res.cookies.set('user', savedUser._id.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60,
            path: '/',
        });

        return res;

        // return NextResponse.json({ message: 'User successfully saved!', savedUser,
        //     success: 1 });

    } catch(err) {

        console.log('Error src/app/backend/users/single/create/route.js', err);
        return NextResponse.json({ message:
            'Something went wrong! src/app/backend/users/single/create/route.js', error: 1 });

    }
};