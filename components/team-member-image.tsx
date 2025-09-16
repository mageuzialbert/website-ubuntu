"use client";

import { useState } from "react";
import Image from "next/image";
import { Users } from "lucide-react";

interface TeamMemberImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function TeamMemberImage({ src, alt, className = "" }: TeamMemberImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${className}`}>
        <Users className="h-12 w-12 text-gray-400" />
      </div>
    );
  }

  return (
    <Image 
      src={src} 
      alt={alt}
      width={96}
      height={96}
      className={`w-full h-full object-cover ${className}`}
      onError={() => setImageError(true)}
    />
  );
}
