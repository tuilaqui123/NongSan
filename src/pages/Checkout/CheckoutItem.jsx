import React from "react";
import itemImg from '../../assets/image/item.png'


const CheckoutItem = () => {
    return (
        <div className="w-full flex flex-row gap-3">
            <div className="w-1/4 p-2 border border-[#bbbbbb] rounded-xl">
                <img
                    src={itemImg}
                    className="w-full"
                />
            </div>
            <div className="w-3/4 text-white text-[15px] flex flex-row justify-between">
                <div className="w-3/5">
                    <p className="font-medium text-[16px] mb-1">Rau xà lách</p>
                    <p className="font-medium">Số lượng: <span className="font-normal">6</span></p>
                </div>
                <p className="font-bold text-[#7dc642] ">400.000đ</p>
            </div>
        </div>
    );
}

export default CheckoutItem;