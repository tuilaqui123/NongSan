import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Item from '../Item/Item'
import SwiperNavControl from "./SwiperNavControl";

const RecommentItem = () => {
    return (
        <div className="w-11/12">
            <p className="font-bold text-3xl">SẢN PHẨM LIÊN QUAN</p>
            <div className="mt-5">
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    spaceBetween={10}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperSlide> <Item itemColor={"green-800"} /> </SwiperSlide>
                    <SwiperNavControl />
                </Swiper>
            </div>
        </div>
    );
}

export default RecommentItem;