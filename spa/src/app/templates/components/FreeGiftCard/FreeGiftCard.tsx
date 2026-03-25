import React from "react";
import IFreeGiftCardProps from "./FreeGiftCard.model";
import Link from "next/link";
import Image from "next/image";

// TODO: Replace with your Magnolia instance URL or use an environment variable
const MAGNOLIA_HOST = "http://localhost:8080";

const FreeGiftCard: React.FC<IFreeGiftCardProps> = ({
  title,
  imageChooser,
  linkChooser,
}) => {
  let imageSrc = "";
  let imageAlt = "Image";

  if (
    imageChooser &&
    imageChooser.field &&
    (imageChooser.image || imageChooser.externalImage)
  ) {
    if (imageChooser.field === "image" && imageChooser.image) {
      const link = imageChooser.image["@link"] as string;
      imageSrc = link.startsWith("http") ? link : `${MAGNOLIA_HOST}${link}`;
      imageAlt = imageChooser.imageAlt || "Image";
    } else if (
      imageChooser.field === "externalImage" &&
      imageChooser.externalImage
    ) {
      imageSrc = imageChooser.externalImage;
      imageAlt = imageChooser.externalImageAlt || "Image";
    }
  }

  let linkHref = "";

  if (linkChooser && linkChooser.field) {
    if (linkChooser.field === "internalLink" && linkChooser.internalLink) {
      linkHref = linkChooser.internalLink;
    } else if (
      linkChooser.field === "externalLink" &&
      linkChooser.externalLink
    ) {
      linkHref = linkChooser.externalLink;
    }
  }


  
  return (
    <Link
      href={linkHref}
      className="flex items-center justify-between bg-[#666666] rounded-xl p-3 hover:bg-gray-600 transition"
    >
      <p className="text-white font-semibold text-base max-w-[200px]">
        {title}
      </p>

      <div className="w-24 h-20 rounded-lg bg-gray-300 flex items-center justify-center relative">
        <Image src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" fill unoptimized/>
      </div>
    </Link>
  )
};

export default FreeGiftCard;

