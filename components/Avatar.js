// components/Avatar.js
import React from "react";
import Image from "next/image";

const Avatar = ({ src, alt, size }) => {
  const avatarSize = size || "h-10 w-10"; // Ukuran default jika tidak disediakan

  return (
    <div className={`rounded-full overflow-hidden ${avatarSize}`}>
      <Image className="object-cover w-full h-full" src={src} alt={alt} width={300} height={300} />
    </div>
  );
};

export default Avatar;
