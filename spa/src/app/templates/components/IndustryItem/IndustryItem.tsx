import Image from 'next/image';
import React from 'react';
import { ImageChooser } from '../FreeGiftCard/FreeGiftCard.model';

type Props = {
  title: string;
  industryImage: ImageChooser;
};

const MAGNOLIA_HOST = "http://localhost:8080";

export default function IndustryItem({ title, industryImage }: Props) {
  console.log('industryImage :>> ', industryImage);
  let imageSrc = '';
  let imageAlt = 'Image';

  if (
    industryImage &&
    industryImage.field &&
    (industryImage.image || industryImage.externalImage)
  ) {
    if (industryImage.field === 'image' && industryImage.image) {
      const link = industryImage.image['@link'] as string;
      imageSrc = link.startsWith('http') ? link : `${MAGNOLIA_HOST}${link}`;
      imageAlt = industryImage.imageAlt || 'Image';
    } else if (
      industryImage.field === 'externalImage' &&
      industryImage.externalImage
    ) {
      imageSrc = industryImage.externalImage;
      imageAlt = industryImage.externalImageAlt || 'Image';
    }
  }

  const hasImage = !!imageSrc;

  return (
    <div className='flex flex-col items-center justify-center border border-transparent hover:border-purple-500 p-6 transition w-full'>
      <div className='relative w-[60px] aspect-square'>
        <Image
          src={imageSrc}
          alt={title}
          className='w-full h-full object-cover'
          fill
          unoptimized
        />
      </div>
      <p className='text-sm'>{title}</p>
    </div>
  );
}
