import React from "react";
import StyleRouterButton from "../ButtonComponent/StyleRouterButton";

const DealContent = ({ bgImage, bgColor, textColor, title, name, content, btnTopColor, btnBottomColor }) => {
    return (
        <div
            className={`w-full h-[45vh] bg-${bgColor} rounded-xl flex items-center `}
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
        >
            <div className="w-4/6 h-4/5 px-5 py-3 flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className={`text-2xl font-semibold text-${textColor}`}>{title}</p>
                    <p className="text-4xl font-bold">{name}</p>
                    <p className="text-lg">{content}</p>
                </div>
                <StyleRouterButton
                    px={3}
                    py={3}
                    width={"2/5"}
                    topColor={btnTopColor}
                    bottomColor={btnBottomColor}
                >
                    <p className="text-white font-medium">XEM NGAY</p>
                    <i class="fa-solid fa-arrow-right text-white"></i>
                </StyleRouterButton>
            </div>
        </div>
    );
}

export default DealContent;