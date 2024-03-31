import React from "react";
import FarmBox from "./FarmBox";
import SmallRouterButton from "../ButtonComponent/SmallRouterButton";
import farmImg from '../../assets/farm.png'

const FarmContent = () => {
    return (
        <div className=" flex items-center justify-center">
            <div className="w-11/12 py-20 flex flex-col justify-center items-center">
                <div className="w-full flex justify-between">
                    <div className="w-1/5"></div>
                    <div className="w-3/5 border-b-2 border-b-black pb-5 mb-10">
                        <h1 className="text-center text-5xl font-bold">TRANG TRẠI LIÊN KẾT</h1>
                    </div>
                    <div className="w-1/5 flex justify-end">
                        <SmallRouterButton
                            btnColor={"green-500"}
                        >
                            <p>Xem thêm</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </SmallRouterButton>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <FarmBox
                        farmImage={farmImg}
                        name={"Công ty thiên nhiên Việt"}
                        content={"Công ty nhiên nhiên Việt chuyên về sản xuất các mặt hàng từ Việt Nam..."}
                    />
                    <FarmBox
                        farmImage={farmImg}
                        name={"Công ty thiên nhiên Việt"}
                        content={"Công ty nhiên nhiên Việt chuyên về sản xuất các mặt hàng từ Việt Nam..."}
                    />
                    <FarmBox
                        farmImage={farmImg}
                        name={"Công ty thiên nhiên Việt"}
                        content={"Công ty nhiên nhiên Việt chuyên về sản xuất các mặt hàng từ Việt Nam..."}
                    />
                    <FarmBox
                        farmImage={farmImg}
                        name={"Công ty thiên nhiên Việt"}
                        content={"Công ty nhiên nhiên Việt chuyên về sản xuất các mặt hàng từ Việt Nam..."}
                    />
                </div>

            </div>
        </div>
    );
}

export default FarmContent;