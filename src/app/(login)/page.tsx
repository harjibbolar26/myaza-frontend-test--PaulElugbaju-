"use client";

import React from "react";
import LoginForm from "./component/LoginForm";
import { ICONS } from "@/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { testimonial } from "../constant";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-background min-h-screen w-full ">
        <div className="flex lg:hidden items-center justify-center gap-2 mt-6">
          <ICONS.Subtract />
          <div className="flex items-start">
            <div className="relative w-[60px] h-[26px]">
              <Image src={"/uifry.png"} alt="uifry_logo" fill />
            </div>
            <p className="text-[4px] mt-1 ml-[2px] font-extrabold">TM</p>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="mt-4 w-full mx-auto flex items-center">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={1}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              loop={true}
              className=""
            >
              {testimonial.map((text, index) => (
                <SwiperSlide key={index}>
                  <div className="h-48">
                    <div className="mt-3 text-center mx-10">
                      <p className="md:text-xl text-base w-full text-white">
                        {text.quote}
                      </p>
                      <p className="text-secondary md:text-lg text-sm font-bold mt-4">
                        {text.name}
                      </p>
                      <p className="text-secondary md:text-base text-xs font-medium mt-1">
                        {text.location}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      {Array(text.rating)
                        .fill(null)
                        .map((_, index) => (
                          <ICONS.Star key={index} width={20} height={16} />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <LoginForm />
      </div>
      <div className="flex-1 bg-backgroundSec min-h-screen p-8 relative hidden lg:flex">
        <div className="mt-4 w-[40vw]">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // navigation
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            loop={true}
            className=""
          >
            {testimonial.map((text, index) => (
              <SwiperSlide key={index}>
                <div className="h-54">
                  <div className="flex items-center justify-start gap-2">
                    {Array(text.rating)
                      .fill(null)
                      .map((_, index) => (
                        <ICONS.Star key={index} />
                      ))}
                  </div>
                  <div className="mt-3">
                    <p className="text-2xl w-[80%] text-white">{text.quote}</p>
                    <p className="text-secondary text-lg font-bold mt-4">
                      {text.name}
                    </p>
                    <p className="text-secondary font-medium mt-1">
                      {text.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute right-0 bottom-0">
          <div className="relative w-[40vw] h-[60vh]">
            <Image
              src={"/loginImg.png"}
              alt="login"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
