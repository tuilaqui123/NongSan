import clsx from "clsx";
import React from "react";

const AccountInfo = ({ position, select }) => {
    return (
        <div
            // className="w-11/12"
            className={clsx({
                "w-full h-full flex flex-col items-center justify-between": position == select,
                "hidden": position !== select,
            })}
        >
            <div className="w-full">
                <p className="text-4xl font-bold">Thông tin tài khoản</p>
                <div className="w-full flex flex-col-reverse mt-5 md:mt-0 md:flex-row justify-between pr-5">
                    <div className="w-full md:w-8/12 flex flex-col gap-5 mt-10">
                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Họ và tên</p>
                            <input
                                type="text"
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Số điện thoại</p>
                            <input
                                type="text"
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Email</p>
                            <input
                                type="text"
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>

                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Ngày sinh</p>
                            <input
                                type="date"
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>

                    </div>
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center cursor-pointer">
                        <div className="w-[180px] h-[180px] border rounded-full flex items-center justify-center">
                            <div className="relative w-3/4 h-3/4 border rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-user text-5xl"></i>
                                <i class="fa-solid fa-camera absolute ml-14"></i>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mt-5 gap-1 text-sm">
                            <p className=" font-medium text-[#7dc642]">Cập nhật ảnh đại diện</p>
                            <i class="fa-solid fa-camera text-[#7dc642]"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-8/12 flex flex-row py-10 lg:py-0">
                <button className="relative bg-[#3e3e3e] w-2/3 md:w-1/2 h-[50px] rounded-xl flex items-center group overflow-hidden">
                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                    <p className="text-lg text-center w-full text-white font-bold z-10">Cập nhật thông tin</p>
                </button>
            </div>
        </div>

    );
}

export default AccountInfo;