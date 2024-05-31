import React, { useState } from "react";
import itemImg from '../../assets/image/item.png'
import QuantitySelectionCart from "./QuantitySelecotionCart";

const CartItem = ({ value }) => {
    const [quantity, setQuantity] = useState(value.amount)
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    return (
        <>
            {value && (
                <div className="w-full flex flex-row mt-3 pt-3 border-t border-gray-300">
                    <div className="w-1/12 flex items-center justify-center">
                        <i className="fa-solid fa-xmark-circle cursor-pointer hover:text-[#fc0307]" onClick={() => alert("okeoke")}></i>
                    </div>
                    <div className="w-11/12 md:w-7/12 flex flex-row gap-3">
                        <img
                            src={value.item.image}
                            className="w-[100px] h-[100px] border rounded-xl p-2"
                        />
                        <div className="h-full flex flex-col justify-between  w-full md:w-auto ">
                            <div className="w-full">
                                <p className="text-xl font-semibold truncate">{value.item.name}</p>
                                <p className="mt-1 font-medium text-gray-500">{formatNumber(value.item.price - value.item.price * value.item.tag)}đ</p>
                            </div>
                            <div className="w-full flex flex-row justify-between items-center  md:hidden">
                                <QuantitySelectionCart
                                    quantity={quantity}
                                    updateQuantity={setQuantity}
                                    limit={20}
                                />
                                <p className="w-auto text-end font-medium text-[17px]">{formatNumber(value.price)}đ</p>

                            </div>
                        </div>
                    </div>
                    <div className="w-2/12 md:flex justify-center hidden">
                        <QuantitySelectionCart
                            quantity={quantity}
                            updateQuantity={setQuantity}
                            limit={20}
                        />
                    </div>
                    <p className="w-2/12 text-end font-medium text-[17px] md:block hidden">{formatNumber(value.price)}đ</p>
                </div>
            )}
        </>
    );
}

export default CartItem;