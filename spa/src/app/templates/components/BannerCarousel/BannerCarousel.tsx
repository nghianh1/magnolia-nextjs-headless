'use client';
import { LHubSwiper } from '@/app/components/LHubSwiper';
import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import IBannerCarouselProps, { CarouselListKey } from './BannerCarousel.model';

// TODO: Replace with your Magnolia instance URL or use an environment variable
const MAGNOLIA_HOST = 'http://localhost:8080';

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const BannerCarousel: React.FC<IBannerCarouselProps> = ({
  autoplay,
  carouselList,
}) => {
  const imageKeys = (carouselList['@nodes'] ||
    Object.keys(carouselList).filter(
      (key) => !key.startsWith('@')
    )) as CarouselListKey[];

  const images: CarouselImage[] = imageKeys
    .map((key) => {
      const node = carouselList[key];
      if (node && node.imageChooser) {
        const chooser = node.imageChooser;
        let imageSrc = '';
        let imageAlt = node.title || '';

        if (chooser.field === 'image' && chooser.image) {
          const link = chooser.image['@link'] as string;
          imageSrc = link.startsWith('http') ? link : `${MAGNOLIA_HOST}${link}`;
          imageAlt = chooser.imageAlt || node.title || '';
        } else if (chooser.field === 'externalImage' && chooser.externalImage) {
          imageSrc = chooser.externalImage;
          imageAlt = chooser.externalImageAlt || node.title || '';
        }
        const title = node.title || '';
        const description = node.description || '';
        return { imageSrc, imageAlt, title, description };
      }
      return null;
    })
    .filter((item): item is CarouselImage => item !== null);

  return (
    // <LHubSwiper
    //   autoplay={autoplay.field === 'enableAutoPlay'}
    //   centeredSlides
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    //   coverflowEffect={{
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 150,
    //     modifier: 2,
    //     slideShadows: false,
    //   }}
    // >
    //   {images.map((image, index) => (
    //     <SwiperSlide
    //       key={index}
    //       className={index === 0 ? 'w-[65%]' : 'w-[20%]'}
    //     >
    //       <div className='relative h-[50vh] rounded-xl overflow-hidden'>
    //         <Image
    //           src={image.imageSrc}
    //           alt={image.imageAlt}
    //           fill
    //           className='object-cover'
    //           unoptimized
    //         />

    //         {(image.title || image.description) && (
    //           <div className='absolute bottom-0 left-0 p-6 text-white'>
    //             <h2 className='text-2xl font-semibold'>{image.title}</h2>
    //             <p className='text-sm opacity-80'>{image.description}</p>
    //           </div>
    //         )}
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </LHubSwiper>
    <LHubSwiper
      effect='coverflow'
      centeredSlides
      slidesPerView='auto'
      spaceBetween={40}
      autoplay={autoplay.field === 'enableAutoPlay'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1.5,
        slideShadows: false,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className='!w-[420px]'>
          <div className='relative h-[50vh] rounded-xl overflow-hidden'>
            <Image
              src={image.imageSrc}
              alt={image.imageAlt}
              fill
              className='object-cover'
              unoptimized
            />

            {(image.title || image.description) && (
              <div className='absolute bottom-0 left-0 p-6 text-white'>
                <h2 className='text-2xl font-semibold'>{image.title}</h2>
                <p className='text-sm opacity-80'>{image.description}</p>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </LHubSwiper>
  );
};

export default BannerCarousel;
