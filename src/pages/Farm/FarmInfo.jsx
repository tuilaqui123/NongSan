import React from "react";
import StyleRouterButton from "../../components/ButtonComponent/StyleRouterButton";
import farmImg from '../../assets/farm.png'
import FarmProduct from "./FarmProduct";


const FarmInfo = ({ preHeight, preInfo, value }) => {
    return (
        <div
            className={`w-full lg:h-${preHeight} p-5 bg-[#3e3e3e] mt-10 duration-200 ease-in rounded-xl flex flex-col items-center lg:grid lg:grid-cols-2 gap-5 md:mb-0 mb-10`}
        >
            {preInfo && value && (
                <div className="w-full h-full flex flex-col gap-5">

                    <div className="w-full h-1/3 bg-white rounded-xl flex flex-row items-start lg:items-center justify-start lg:justify-evenly p-2 sm:p-5 lg:p-0 sm:gap-5 gap-2 lg:gap-0">
                        <div className="w-2/5 md:w-1/3 h-full lg:h-auto border border-[#3e3e3e] rounded-xl overflow-hidden">
                            <img
                                src={value.image}
                            />
                        </div>
                        <div className="w-1/2 lg:h-auto flex flex-col justify-between gap-5">
                            <p className="font-bold text-base  sm:text-xl">{value.name}</p>
                            <div>
                                <div className="w-full flex flex-row items-center gap-1">
                                    <i class="w-[20px] fa-solid fa-envelope text-base text-[#7dc642]"></i>
                                    <p className="text-sm sm:text-base font-bold text-[#7dc642]">fudee.contact@gmail.com</p>
                                </div>
                                <div className="w-full flex flex-row items-center gap-1">
                                    <i class="w-[20px] fa-solid fa-phone text-base text-[#7dc642]"></i>
                                    <p className="text-sm sm:text-base font-bold text-[#7dc642]">fudee.contact@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-2/3 bg-white rounded-xl p-3 flex flex-col items-end justify-between">
                        <div>
                            <p className="text-2xl font-bold mb-5">Giới thiệu về {value.name}</p>
                            <p className="indent-10">{value.info}</p>
                        </div>
                    </div>
                </div>
            )}
            {preInfo && (
                <div className={`w-full h-${preHeight} lg:h-full overflow-hidden `}>
                    <div className="w-full h-full rounded-xl bg-white flex flex-col items-center">
                        <p className="text-2xl font-bold mb-5 mt-3">Các sản phẩm của {value.name}</p>
                        <div className="w-full p-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 scrollable-div overflow-y-scroll gap-3 pr-3 pb-5">
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                            <FarmProduct />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FarmInfo;