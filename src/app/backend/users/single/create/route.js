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

        return NextResponse.json({ message: 'hello frontend' });

    } catch(err) {

        console.log('Error src/app/backend/users/single/create/route.js', err);
        return NextResponse.json({ message: 'hello frontend' });

    }
};