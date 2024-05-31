import React, { useState } from "react";
import itemImg from '../../assets/image/item.png'
import QuantitySelectionCart from "./QuantitySelecotionCart";

const CartItem = ({ value }) => {
    const [quantity, setQuantity] = useState(1)
    // console.log(value)
    return (
        <>
            {value && (
                <div className="w-full flex flex-row mt-3 pt-3 border-t border-gray-300">
                    <div className="w-1/12 flex items-center justify-center">
                        <i className="fa-solid fa-xmark-circle cursor-pointer hover:text-[#fc0307]"></i>
                    </div>
                    <div className="w-11/12 md:w-7/12 flex flex-row gap-3">
                        <img
                            src={value.image}
                            className="w-[100px] h-[100px] border rounded-xl p-2"
                        />
                        <div className="h-full flex flex-col justify-between  w-full md:w-auto ">
                            <div className="w-full">
                                <p className="text-xl font-semibold truncate">{value.name}</p>
                                <p className="mt-1 font-medium text-gray-500">{value.price - value.price * value.tag}đ</p>
                            </div>
                            <div className="w-full flex flex-row justify-between items-center  md:hidden">
                                <QuantitySelectionCart
                                    quantity={quantity}
                                    updateQuantity={setQuantity}
                                    limit={20}
                                />
                                <p className="w-auto text-end font-medium text-[17px]">{(value.price - value.price * value.tag) * value.quantity}đ</p>

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
                    <p className="w-2/12 text-end font-medium text-[17px] md:block hidden">{(value.price - value.price * value.tag) * value.quantity}đ</p>
                </div>
            )}

        </>

    );
}

export default CartItem;