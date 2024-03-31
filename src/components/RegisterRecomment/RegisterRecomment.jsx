import React from "react";


const RegisterRecomment = () => {
    return (
        <div
            className="w-full h-[40vh] flex items-center justify-center bg-black"
        >
            <div className="w-10/12 h-4/6 flex flex-col items-center justify-between ">
                <div className="text-center h-2/5 flex flex-col items-center justify-between">
                    <p className="text-2xl text-white font-bold ">ĐĂNG KÝ NGAY</p>
                    <p className="text-4xl text-[#7dc642] font-bold">GIẢM GIÁ 30% ĐƠN HÀNG</p>
                </div>
                <div className="text-center w-8/12 h-2/5 flex flex-row items-center justify-evenly">
                    <input
                        type="text"
                        placeholder="Email của bạn"
                        className="w-3/4 h-[45px] rounded-lg pl-5 text-lg focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                    />
                    <button className="relative w-1/6 h-[45px] flex items-center justify-start bg-[#3e3e3e] rounded-lg cursor-pointer border border-white group hover:border-none duration-700 ease-linear">
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                        <p className="text-lg text-center w-full text-white font-bold z-10">ĐĂNG KÝ</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterRecomment;