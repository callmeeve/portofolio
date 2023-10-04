import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, description, imageUrl, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover"
        width={1920}
        height={1080}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link href={`/project/${slug}`}>
          <span className="mt-4 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded inline-block">
            Lihat Detail
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
