import React from "react";
import itemImg from '../../assets/image/item.png'

const ShippingBox = () => {
    return (
        <div className="w-full h-auto border border-gray-500 bg-gray-50 rounded-md p-5">
            {/* mã đơn hàng / thông tin (địa chỉ, tên, đt,..), hình thức thanh toán, trang thái thanh toán,
                trạng thái đơn hàng, danh sách sản phẩm, dự kiến giao hàng,
             */}
            <p className="w-full flex justify-between text-lg font-medium">Mã đơn hàng: <span>0923</span></p>
            <p className="w-full flex justify-between text-lg font-medium">Hình thức thanh toán: <span>Tiền mặt</span></p>
            <p className="w-full flex justify-between text-lg font-medium">Trạng thái đơn hàng: <span>Đang chờ xác nhận</span></p>
            <div className="bg-gray-200 p-3 rounded-md my-3">
                <p className="text-xl font-bold">Thông tin đặt hàng</p>
                <p className="w-full flex justify-between font-medium">Họ tên: <span>0923</span></p>
                <p className="w-full flex justify-between font-medium">Số điện thoại: <span>0923</span></p>
                <p className="w-full flex justify-between font-medium">Địa chỉ: <span>0923</span></p>
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
                <div className="flex flex-row items-center justify-between mb-5">
                    <p className="text-xl font-bold">Thông tin giỏ hàng</p>
                    <p className="text-xl font-bold text-[#69a737]"><i class="fa-solid fa-money-bill"></i> 100.000đ</p>
                </div>
                <div className="flex flex-row gap-3">
                    <img
                        src={itemImg}
                        className="w-[80px] border border-[#3e3e3e] p-2 rounded-md"
                    />
                    <div className="w-full flex flex-row items-start justify-between">
                        <div>
                            <p className="text-lg font-bold">Rau xà lách</p>
                            <p>Số lượng: 6</p>
                        </div>
                        <p className="text-lg font-bold">40.000đ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingBox