import React from "react";
import ShippingBox from "./ShippingBox";

const OrderShipping = () => {
    return (
        <div
            className="w-full"
        >
            <p className="text-4xl font-bold">Theo dõi đơn hàng</p>
            <div className="w-full mt-5 h-full flex flex-col gap-3 overflow-y-scroll scrollable-div">
                <ShippingBox />

            </div>
        </div>
    )
}

export default OrderShipping