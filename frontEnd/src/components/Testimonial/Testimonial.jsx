import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";

import user01 from "../../assets/images/testimonial/sakuna.png";
import user02 from "../../assets/images/testimonial/kavindu.png";
import user03 from "../../assets/images/testimonial/ravindu.png";
import user04 from "../../assets/images/testimonial/sahan.png";
import user05 from "../../assets/images/testimonial/isuru.png";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-3 px-3 lg:px-5 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 lg:gap-5">
              <img src={user01} alt="patientAvatar" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
              <div>
                <h4 className="text-sm lg:text-base leading-none font-semibold text-headingColor">
                  Sakuna Kavishka
                </h4>
                <div className="flex items-center gap-1 lg:gap-2">
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-sm leading-snug mt-2 lg:mt-3 text-textColor font-normal">
              &quot;Navigating through the website was a breeze! Finding the perfect hotel and restaurant options for my trip was quick and easy. A user-friendly experience overall!&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-3 lg:px-5 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 lg:gap-5">
              <img src={user02} alt="patientAvatar" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
              <div>
                <h4 className="text-sm lg:text-base leading-none font-semibold text-headingColor">
                  Kavindu Dinujaya
                </h4>
                <div className="flex items-center gap-1 lg:gap-2">
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-sm leading-snug mt-2 lg:mt-3 text-textColor font-normal">
              &quot;I love the variety of listings available on the website. Whether I&apos;m looking for a luxurious hotel or a cozy café, I always find great options here!&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-3 lg:px-5 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 lg:gap-5">
              <img src={user03} alt="patientAvatar" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
              <div>
                <h4 className="text-sm lg:text-base leading-none font-semibold text-headingColor">
                  Ravindu Vinoj
                </h4>
                <div className="flex items-center gap-1 lg:gap-2">
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-sm leading-snug mt-2 lg:mt-3 text-textColor font-normal">
              &quot;The reviews on the website helped me make informed decisions about where to stay and dine during my trip. It&apos;s great to read honest feedback from fellow travelers.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-3 lg:px-5 rounded-3xl shadow-2xl ">
            <div className="flex items-center gap-3 lg:gap-5">
              <img src={user04} alt="patientAvatar" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
              <div>
                <h4 className="text-sm lg:text-base leading-none font-semibold text-headingColor">
                  Sahan Lakshitha
                </h4>
                <div className="flex items-center gap-1 lg:gap-2">
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-sm leading-snug mt-2 lg:mt-3 text-textColor font-normal">
              &quot;I appreciate the detailed profiles provided for each hotel and restaurant. It&apos;s helpful to key information all in one place.&quot;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-3 lg:px-5 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 lg:gap-5">
              <img src={user05} alt="patientAvatar" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
              <div>
                <h4 className="text-sm lg:text-base leading-none font-semibold text-headingColor">
                  Isuru Jayanendra
                </h4>
        <div className="flex items-center gap-1 lg:gap-2">
          <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
          <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
          <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
          <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
          <HiStar className="text-yellow-400 w-4 h-4 lg:w-5 lg:h-5" />
        </div>
      </div>
    </div>
    <p className="text-xs lg:text-sm leading-snug mt-2 lg:mt-3 text-textColor font-normal">
      &quot;The website&apos;s layout is clean and modern, making it visually appealing and easy to navigate. I was able to find everything I needed without any confusion.&quot;
    </p>
  </div>
</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Testimonial;