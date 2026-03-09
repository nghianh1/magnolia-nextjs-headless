import React from 'react';
import { environment } from '../../../environments/environment';
import { decodeIfEscaped } from '../../services/content-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ImageChooser {
  field?: 'image' | 'externalImage';
  image?: { '@link': string };
  imageAlt?: string;
  externalImage?: string;
  externalImageAlt?: string;
}

interface ITourCardProps {
  title: string;
  description: string;
  imageChooser?: ImageChooser;
}

/* Helper to cleanly get image src + alt (this is the part that used to feel ugly) */
const getImageProps = (imageChooser?: ImageChooser) => {
  if (!imageChooser?.field) return { src: '', alt: 'Tour image' };

  if (imageChooser.field === 'image' && imageChooser.image?.['@link']) {
    return {
      src: `${environment.damRawBase}${imageChooser.image['@link']}`,
      alt: imageChooser.imageAlt || 'Tour image',
    };
  }

  if (imageChooser.field === 'externalImage' && imageChooser.externalImage) {
    return {
      src: imageChooser.externalImage,
      alt: imageChooser.externalImageAlt || 'Tour image',
    };
  }

  return { src: '', alt: 'Tour image' };
};

const MyCustomTourCard: React.FC<ITourCardProps> = ({
  title,
  description,
  imageChooser,
}) => {
  const { src: imageSrc, alt: imageAlt } = getImageProps(imageChooser);


  return (
    // <div className="group w-full">
    //   <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
    //     {/* Image Area */}
    //     <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
    //       {imageSrc ? (
    //         <img
    //           src={imageSrc}
    //           alt={imageAlt}
    //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    //         />
    //       ) : (
    //         <div className="w-full h-full flex items-center justify-center text-gray-400">
    //           No image
    //         </div>
    //       )}
    //     </div>

    //     {/* Content Area */}
    //     <div className="p-6 flex-1 flex flex-col">
    //       {title && (
    //         <h3 className="font-bold text-2xl leading-tight mb-3 line-clamp-2">
    //           {title}
    //         </h3>
    //       )}

    //       {description && (
    //         <div
    //           className="prose prose-sm text-gray-600 flex-1 line-clamp-4"
    //           dangerouslySetInnerHTML={{ __html: decodeIfEscaped(description) }}
    //         />
    //       )}
    //     </div>
    //   </div>
    // </div>
    <Card className='group w-full'>
      <CardHeader>
        <CardTitle>
          {title && (
            <h3 className='font-bold text-2xl leading-tight mb-3 line-clamp-1'>
              {title}
            </h3>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className='relative w-full aspect-[16/10] overflow-hidden bg-gray-100'>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            fill
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-gray-400'>
            No image
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-col justify-center gap-4'>
        <CardDescription>
          {description && (
            <div
              className='prose prose-sm text-gray-600 flex-1 line-clamp-4'
              dangerouslySetInnerHTML={{ __html: decodeIfEscaped(description) }}
            />
          )}
        </CardDescription>
        <div className='flex gap-4'>
          <Button className='w-full'>Read more</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MyCustomTourCard;
