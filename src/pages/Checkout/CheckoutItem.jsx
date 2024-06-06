import React from "react";
import itemImg from '../../assets/image/item.png'


const CheckoutItem = ({ value }) => {
    console.log(value)
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    return (
        <>
            {value && (
                <div className="w-full flex flex-row gap-3">
                    <div className="w-1/4 sm:w-2/5 md:w-2/5 lg:w-1/4 p-2 border border-[#bbbbbb] rounded-xl">
                        <img
                            src={value.item.image}
                            className="w-[70px] h-[70px]"
                        />
                    </div>
                    <div className="w-3/4 md:w-3/5 lg:w-3/4 text-white text-[15px] flex flex-row sm:flex-col lg:flex-row justify-between">
                        <div className="w-full lg:w-3/5">
                            <p className="font-medium text-[16px] mb-1 truncate">{value.item.name}</p>
                            <p className="font-medium">Số lượng: <span className="font-normal">{value.amount}</span></p>
                        </div>
                        <p className="font-bold text-[#7dc642] ">{formatNumber(value.item.price - value.item.price * value.item.tag)}đ</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default CheckoutItem;