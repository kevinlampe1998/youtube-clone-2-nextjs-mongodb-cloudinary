import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import Video from '@/models/Video';
import connectMongo from '@/lib/connectMongo';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    await connectMongo();

    const body = await req.json();
    const fileStr = body.data;

    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      folder: 'youtube-clone',
      resource_type: 'video',
    });

    const url = uploadResponse.secure_url;
    const public_id = uploadResponse.public_id;

    console.log('url', url);
    console.log('public_id', public_id);

    const newVideo = new Video({ public_id, url });
    console.log('newVideo', newVideo);

    const savedVideo = await newVideo.save();
    console.log('savedVideo', savedVideo);

    return NextResponse.json({
      message: 'Video uploaded successfully!',
      success: true,
      video: savedVideo,
    });

  } catch (error) {
    console.error('Video Upload Error: ', error);
    return NextResponse.json({ message: 'Upload error', error: 1 });
  }
}