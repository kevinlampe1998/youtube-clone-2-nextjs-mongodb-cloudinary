import { NextResponse } from "next/server";
import connectMongo from "@/lib/connectMongo";
import User from "@/models/User";

export const POST = async (req) => {
    try {

        await connectMongo();

        const body = await req.json();
        console.log('body', body);
        const { recognition, password } = body;

        console.log(recognition, password);

        const foundUser = await User.findOne({ emailAddress: recognition });

        if (!foundUser) 
            return NextResponse.json({ message: 'User not found!',
            userNotFound: 1 });

        console.log(foundUser);

        if (foundUser.password !== password) {

            return NextResponse.json({ message: 'Password is wrong!',
                passwordWrong: 1 });

        } else {
            
            const res = NextResponse.json({ message:
                'You are successful signed in!',
                signedIn: 1, foundUser });

            res.cookies.set('user', foundUser._id.toString(), {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24,
                path: '/',
            });

            return res;
        }

    } catch(err) {

        console.log('Error on POST Route /api/users/sign-in', err);
        console.log('Error on POST Route /api/users/sign-in');
        return NextResponse.json({ message: 'Error on POST Route /api/users/sign-in!', error: 1 });

    }
};