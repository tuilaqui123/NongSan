import React from "react";
import clsx from "clsx";
import OrderBox from "./OrderBox";
import '../../hiddenScroll.css'

const OrderHistory = () => {
    return (
        <div
            className="w-full h-full"
        >
            <p className="text-4xl font-bold">Lịch sử đơn hàng</p>
            <div className="relative h-[50px] w-full flex flex-row items-center mt-5">
                <input
                    type="text"
                    placeholder="Nhập từ khoá tìm kiếm..."
                    className="w-full h-full pl-5 border border-[#3e3e3e] rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                />
                <i class="fa-solid fa-magnifying-glass absolute mr-5 right-0 text-xl text-[#7dc642]"></i>
            </div>
            <div className="mt-5 h-full flex flex-col gap-3 ">
                <div className="w-full grid grid-cols-4 pb-3  border-b border-gray-300">
                    <p className="text-sm sm:text-base font-bold justify-self-start">Mã đơn hàng</p>
                    <p className="text-sm sm:text-base font-bold justify-self-center">Ngày đặt hàng</p>
                    <p className="text-sm sm:text-base font-bold justify-self-center">Tổng tiền</p>
                    <p className="text-sm sm:text-base font-bold justify-self-end">Trạng thái</p>
                </div>
                <div className="w-full h-[60vh] flex flex-col gap-3 overflow-y-scroll scrollable-div">
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />

                </div>
            </div>
        </div>
    );
}

export default OrderHistory;