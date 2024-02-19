import "swiper/css";
import React from "react";

import { dummyImages } from "@/constants/global";
import { Box, Image, Stack } from "@chakra-ui/react";
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselBanner = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<div class="${className}">${index + 1}</div>`;
    },
  };

  return (
    <Swiper
      slidesPerView={"auto"}
      // pagination={pagination}
      // className="mySwiper"
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      style={{ zIndex: 1, position: "relative" }}
      modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
      spaceBetween={14}
    >
      {dummyImages.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item}
            alt={`Slide ${index}`}
            borderRadius={{ base: 8, md: 16 }}
            w="full"
            h={{ base: "auto", md: "400px", lg: "600px" }}
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselBanner;
