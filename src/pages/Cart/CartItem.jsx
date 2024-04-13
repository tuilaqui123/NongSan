import React, { useState } from "react";
import itemImg from '../../assets/image/item.png'
import QuantitySelectionCart from "./QuantitySelecotionCart";

const CartItem = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className="w-full flex flex-row mt-3 pt-3 border-t border-gray-300">
            <div className="w-1/12 flex items-center justify-center">
                <i className="fa-solid fa-xmark-circle cursor-pointer hover:text-[#fc0307]"></i>
            </div>
            <div className="w-7/12 flex flex-row gap-3">
                <img
                    src={itemImg}
                    className="w-1/4 border rounded-xl p-2"
                />
                <div className="h-full flex flex-col ">
                    <p className="text-xl font-semibold">Rau rau xà lách</p>
                    <p className="mt-1 font-medium text-gray-500">40.000đ</p>
                </div>
            </div>
            <div className="w-2/12 flex justify-center ">
                <QuantitySelectionCart
                    quantity={quantity}
                    updateQuantity={setQuantity}
                    limit={20}
                />
            </div>
            <p className="w-2/12 text-end font-medium text-[17px]">40.000đ</p>
        </div>
    );
}

export default CartItem;