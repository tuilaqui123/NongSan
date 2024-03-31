import React from "react";
import NewsBox from "./NewsBox";
import SmallRouterButton from "../ButtonComponent/SmallRouterButton";

const News = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-11/12 py-20 flex flex-col justify-center items-center">
                <div className="w-full flex justify-between">
                    <div className="w-1/5"></div>
                    <div className="w-3/5 border-b-2 border-b-black pb-5 mb-10">
                        <h1 className="text-center text-5xl font-bold">KIẾN THỨC</h1>
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
                <div className="grid grid-cols-3 gap-7">
                    <NewsBox
                        title={"Chả cốm ăn với gì ngon?"}
                        date={"16/05/2021"}
                        author={"Nguyễn Thiện Nhân"}
                        preText={"Lorem ipsum dolor sit amet, Lor r sit amet,  r sit amet,  r sit amet,  r sit amet,  r sit amet,  em ipsum dolor sit amet, ing elit ..."}
                    />
                    <NewsBox
                        title={"Chả cốm ăn với gì ngon?"}
                        date={"16/05/2021"}
                        author={"Nguyễn Thiện Nhân"}
                        preText={"Lorem ipsum dolor sit amet, Lor r sit amet,  r sit amet,  r sit amet,  r sit amet,  r sit amet,  em ipsum dolor sit amet, ing elit ..."}
                    />
                    <NewsBox
                        title={"Chả cốm ăn với gì ngon?"}
                        date={"16/05/2021"}
                        author={"Nguyễn Thiện Nhân"}
                        preText={"Lorem ipsum dolor sit amet, Lor r sit amet,  r sit amet,  r sit amet,  r sit amet,  r sit amet,  em ipsum dolor sit amet, ing elit ..."}
                    />
                </div>

            </div>
        </div>
    );
}

export default News;