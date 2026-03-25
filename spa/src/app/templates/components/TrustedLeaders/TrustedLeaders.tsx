import Image from 'next/image';
import { FC } from 'react';
interface LeaderLogo {
  image: string;
  alt?: string;
}

interface Props {
  title?: string;
  logos: LeaderLogo[];
}

export const TrustedLeaders: FC<Props> = ({ title, logos = [] }) => {
  const logoList = Object.values(logos ?? {}).filter((item) => item.image);

  return (
    <section className='bg-gray-100 py-6 mt-[71px] w-full'>
      <div className='container mx-auto flex items-center gap-10 justify-between '>
        <p className='font-semibold text-2xl whitespace-nowrap'>{title}</p>

        <div className='flex items-center gap-4'>
          {logoList.map((logo, index) => (
            <div key={index} className='relative w-[100px] h-[40px]'>
              <Image
                src={`${process.env.MGNL_HOST}${logo.image['@link']}`}
                alt={logo.alt ?? ''}
                fill
                className='object-cover'
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedLeaders;
