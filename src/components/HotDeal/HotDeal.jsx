import React from "react";
import DealContent from "./DealContent";
import deal1 from '../../assets/image/deal1.png'


const HotDeal = () => {
    return (
        <div className="w-full h-auto p-5 py-20 bg-[#3e3e3e]">
            <div>
                <div className="w-full flex flex-col text-center mb-10">
                    <p className="text-2xl font-medium text-[#7dc642] mb-5">CƠ HỘI SĂN ĐƯỢC GIÁ TỐT NHẤT TUẦN</p>
                    <p className="text-5xl font-bold text-white">ĐANG KHUYẾN MÃI</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
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
                </div>
            </div>
        </div>
    );
}

export default HotDeal;