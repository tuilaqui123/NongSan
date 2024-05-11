import React, { useContext, useState } from "react";
import item from '../../assets/image/item.png'
import StatusTag from "../Tag/StatusTag";
import ItemTag from "../Tag/ItemTag";
import RouterButton from "../ButtonComponent/RouterButton";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const Item = ({ itemColor }) => {
    const { setBreadcrumb } = useContext(AppContext)

    function handleBreadcrumb() {
        const temp = {
            main: "Cửa hàng",
            child: 3
        }

        setBreadcrumb(temp)
    }
    return (
        <RouterButton
            // path={`/cua-hang/${tag}/${itemName}`}
            path={"/cua-hang/hai-san/oke"}
            onclick={handleBreadcrumb}
        >
            <div className={`w-full h-auto border border-gray-400 bg-white rounded-lg p-3 hover:bg-${itemColor} group hover:border-none duration-200 cursor-pointer`}>
                <div className="relative border border-gray-300 rounded-lg mb-5">
                    <img
                        src={item}
                        alt="item"
                        className="w-full group-hover:scale-125 group-hover:brightness-110 duration-300"
                    />
                    <StatusTag>
                        <p className="text-white text-sm">HOT DEAL</p>
                    </StatusTag>
                </div>
                <div className="w-full h-auto">
                    <p className="text-xl text-[#3e3e3e] text-left font-bold group-hover:text-white">Rau xà lách</p>
                    <div className="flex flex-row my-3 gap-2">
                        <ItemTag>
                            <p className="text-white text-sm font-medium group-hover:text-[#3e3e3e] group-hover:font-semibold">-40%</p>
                        </ItemTag>

                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-end gap-1">
                            <p className="text-xl font-bold text-[#3e3e3e] group-hover:text-white duration-100">40.000đ</p>
                            <p className="line-through text-gray-400 text-base font-medium group-hover:text-white">100.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterButton>
    );
}

export default Item;