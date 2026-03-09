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

  const hasImage = !!imageSrc;



 

  // return (
    // <div className="w-full p-4">
    //   <div
    //     className={`flex overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl`}
    //   >
    //     {hasImage && (
    //       <div
    //         className={`${getImageClasses(imagePosition)} overflow-hidden flex-shrink-0`}
    //       >
    //         {/* eslint-disable-next-line @next/next/no-img-element */}
    //         <img
    //           src={imageSrc}
    //           alt={imageAlt}
    //           loading="lazy"
    //           className="w-full h-full object-cover object-center"
    //         />
    //       </div>
    //     )}

    //     <div className="p-6 flex flex-col justify-center flex-grow">
    //       {title && <h2 className="font-bold text-xl mb-2">{title}</h2>}
        
    //       {linkHref && (
    //         <div className="mt-4">
    //           <a
    //             href={linkHref}
    //             className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    //             target={
    //               linkChooser?.field === "externalLink" ? "_blank" : undefined
    //             }
    //             rel={
    //               linkChooser?.field === "externalLink"
    //                 ? "noopener noreferrer"
    //                 : undefined
    //             }
    //           >
    //             {linkText}
    //           </a>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  //   <div className="w-full p-4 flex">
  //     <p>{title}</p>
  //     <div>
        
  //     </div>
  //   </div>
  // );
  return (
    <Link
      href={linkHref}
      className="flex items-center justify-between bg-[#666666] rounded-xl p-3 hover:bg-gray-600 transition"
    >
      <p className="text-white font-semibold text-base max-w-[200px]">
        {title}
      </p>

      <div className="w-24 h-20 rounded-lg bg-gray-300 flex items-center justify-center">
        <Image src={imageSrc} alt={imageAlt} className="w-10 h-10" fill/>
      </div>
    </Link>
  )
};

export default FreeGiftCard;
