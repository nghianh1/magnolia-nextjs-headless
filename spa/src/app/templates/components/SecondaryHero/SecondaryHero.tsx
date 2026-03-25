import React from 'react';
import ISecondaryHeroProps from './SecondaryHero.model';
import Image from 'next/image';

// TODO: Replace with your Magnolia instance URL or use an environment variable
const MAGNOLIA_HOST = 'http://localhost:8080';
// TODO: Replace with your Magnolia app base path or use an environment variable

const SecondaryHero: React.FC<ISecondaryHeroProps> = ({
  title,
  bannerImage,
}) => {
  let imageSrc = '';
  let imageAlt = 'Image';
  if (
    bannerImage &&
    bannerImage.field &&
    (bannerImage.image || bannerImage.externalImage)
  ) {
    if (bannerImage.field === 'image' && bannerImage.image) {
      const link = bannerImage.image['@link'] as string;
      imageSrc = link.startsWith('http') ? link : `${MAGNOLIA_HOST}${link}`;
      imageAlt = bannerImage.imageAlt || 'Image';
    } else if (
      bannerImage.field === 'externalImage' &&
      bannerImage.externalImage
    ) {
      imageSrc = bannerImage.externalImage;
      imageAlt = bannerImage.externalImageAlt || 'Image';
    }
  }

  console.log('imag');

  return (
    <section
      className={`container mx-auto flex flex-col gap-4 justify-center mt-14`}
    >
      {title && <h1 className='text-2xl font-bold mb-4 '>{title}</h1>}
      {imageSrc && (
        <div className='relative w-full h-56'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            className='object-cover w-full h-full'
            fill
            unoptimized
          />
        </div>
      )}
    </section>
  );
};

export default SecondaryHero;
