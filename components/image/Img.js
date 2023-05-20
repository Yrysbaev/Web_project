import Image from "next/image";

export default function Img({className, src, alt,width,height}) {
    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
        />
    );
};

