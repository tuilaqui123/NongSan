import React from "react";
import DealContent from "./DealContent";
import deal1 from '../../assets/image/deal1.png'
import DEAL2 from '../../assets/image/DEAL2.png'
import d3 from '../../assets/image/d3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HotDealControl from "./HotDealControl";


const HotDeal = () => {
    return (
        <div className="w-full h-auto p-5 py-20 bg-[#3e3e3e] ">
            <div>
                <div className="w-full flex flex-col text-center mb-10">
                    <p className="text-xl sm:text-2xl font-medium text-[#7dc642] mb-5">CÁC SẢN PHẨM MỚI GIÁ TỐT TRONG TUẦN</p>
                    <p className="text-4xl sm:text-5xl font-bold text-white">SẢN PHẨM MỚI</p>
                </div>
                <div className="hidden md:grid md:grid-cols-2 gap-5">
                    {/* <DealContent
                        bgImage={deal1}
                        bgColor={"purple-200"}
                        textColor={"pink-500"}
                        title={"TRÁI CÂY TƯƠI"}
                        name={"HEALTHY FOOD"}
                        content={"Giảm giá 40% cho các sản phẩm"}
                        btnTopColor={"purple-500"}
                        btnBottomColor={"[#3e3e3e]"}
                    /> */}
                    <DealContent
                        bgImage={DEAL2}
                        bgColor={"orange-200"}
                        textColor={"red-500"}
                        title={"TRÁI CÂY TƯƠI"}
                        name={"FRESH MARKET"}
                        content={"Tận hưởng hương vị của mùa hè"}
                        btnTopColor={"orange-500"}
                        btnBottomColor={"[#3e3e3e]"}
                        path={"/cua-hang/trai-cay"}
                    />
                    <DealContent
                        bgImage={d3}
                        bgColor={"green-200"}
                        textColor={"blue-500"}
                        title={"RAU CỦ SẠCH"}
                        name={"ORGANIC FOOD"}
                        content={"Món quà vườn rau tươi ngon"}
                        btnTopColor={"green-500"}
                        btnBottomColor={"[#3e3e3e]"}
                        path={"/cua-hang/rau-cu"}
                    />
                    {/* <DealContent
                        bgImage={deal1}
                        bgColor={"purple-200"}
                        textColor={"pink-500"}
                        title={"TRÁI CÂY TƯƠI"}
                        name={"HEALTHY FOOD"}
                        content={"Giảm giá 40% cho các sản phẩm"}
                        btnTopColor={"purple-500"}
                        btnBottomColor={"[#3e3e3e]"}
                    /> */}
                </div>
                <div className="w-full block md:hidden ">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <DealContent
                                bgImage={deal1}
                                bgColor={"purple-200"}
                                textColor={"pink-500"}
                                title={"TRÁI CÂY TƯƠI"}
                                name={"HEALTHY FOOD"}
                                content={"Giảm giá 40% cho các sản phẩm"}
                                btnTopColor={"purple-500"}
                                btnBottomColor={"[#3e3e3e]"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DealContent
                                bgImage={deal1}
                                bgColor={"purple-200"}
                                textColor={"pink-500"}
                                title={"TRÁI CÂY TƯƠI"}
                                name={"HEALTHY FOOD"}
                                content={"Giảm giá 40% cho các sản phẩm"}
                                btnTopColor={"purple-500"}
                                btnBottomColor={"[#3e3e3e]"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DealContent
                                bgImage={deal1}
                                bgColor={"purple-200"}
                                textColor={"pink-500"}
                                title={"TRÁI CÂY TƯƠI"}
                                name={"HEALTHY FOOD"}
                                content={"Giảm giá 40% cho các sản phẩm"}
                                btnTopColor={"purple-500"}
                                btnBottomColor={"[#3e3e3e]"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <DealContent
                                bgImage={deal1}
                                bgColor={"purple-200"}
                                textColor={"pink-500"}
                                title={"TRÁI CÂY TƯƠI"}
                                name={"HEALTHY FOOD"}
                                content={"Giảm giá 40% cho các sản phẩm"}
                                btnTopColor={"purple-500"}
                                btnBottomColor={"[#3e3e3e]"}
                            />
                        </SwiperSlide>
                        <HotDealControl />
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HotDeal;