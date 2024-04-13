import React from "react";
import itemImg from '../../assets/image/item.png'

const FarmProduct = () => {
    return (
        <div className="border border-[#3e3e3e] p-2 rounded-xl flex flex-col gap-3 pb-3 cursor-pointer shadow-black group hover:border-[#7dc642] hover:shadow-2xl duration-200">
            <div className="w-full border  rounded-xl p-1">
                <img
                    src={itemImg}
                    className="w-full group-hover:scale-110 duration-200 "
                />
            </div>
            <p className="w-full truncate text-lg font-medium text-center ">Rau xà lách </p>
        </div>
    );
}

export default FarmProduct