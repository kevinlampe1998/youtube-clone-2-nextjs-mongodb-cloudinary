'use client';

import Image from "next/image";

const Img = ({ props }) => {
    const [src, width, height, alt] = props;
    return <Image src={src} width={width} height={height} alt={alt} />;
};

export default Img;