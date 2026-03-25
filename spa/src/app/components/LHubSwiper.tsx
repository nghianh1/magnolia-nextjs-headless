import React, { ComponentProps, FC } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

type Props = {
  children: React.ReactNode;
} & SwiperProps;

export const LHubSwiper: FC<Props> = ({ children, ...props }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      pagination={{ clickable: true }}
      {...props}
    >
      {children}
    </Swiper>
  );
};
