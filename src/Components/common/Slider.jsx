import React from "react";
// 1. Импортируем компоненты и модули Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { WORKS } from "../../data/artistsData";

// 2. Импортируем необходимые стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PhotoSlider = () => {
  return (
    <div className="w-full p-4 mx-auto max-w-[1440px]">
      <h1 className="py-4 pr-6 text-3xl tracking-widest text-left uppercase lg:py-8 md:text-4xl lg:text-[80px] font-boldonse lg:my-6 text-white">
        Gallery
      </h1>

      <Swiper
        // Подключение модулей
        modules={[Navigation, Pagination, Autoplay]}
        // Базовые настройки
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Бесконечная прокрутка
        // Навигация и пагинация
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // Адаптивность (Breakpoints)
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className=""
      >
        {WORKS.map((img, id) => (
          <SwiperSlide key={id}>
            <div className="relative h-[60vh] overflow-hidden group lg:h-[600px] py-4 pt-6">
              <img
                src={img.path}
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:sepia"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
