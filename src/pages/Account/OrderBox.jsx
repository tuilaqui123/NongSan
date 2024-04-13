import React from "react";

const OrderBox = () => {
    return (
        <div
            className="w-full grid grid-cols-4 py-3 px-2 rounded-xl border  hover:border-[#3e3e3e] cursor-pointer hover:bg-gray-200"

        >
            <p className="text-base font-medium text-[#3e3e3e] justify-self-start">#001</p>
            <p className="text-base font-medium text-[#3e3e3e] justify-self-center">11/12/2023</p>
            <p className="text-base font-medium text-[#3e3e3e] justify-self-center">199.000đ</p>
            <p className="text-base font-bold text-[#63ff4f] justify-self-end">Đang giao</p>
        </div>
    );
}

export default OrderBox;