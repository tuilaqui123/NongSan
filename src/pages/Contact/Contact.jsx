import React from "react";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import logo from '../../assets/logo.png'
import WebCard from "./WebCard";

const Contact = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                        location={"Liên hệ"}
                    />
                </div>
                <div className="relative w-full h-auto bg-white lg:bg-transparent rounded-xl lg:h-screen flex flex-col lg:flex-row  justify-end items-center">
                    <div className="absolute left-0 w-1/2 p-5 h-[90vh] bg-[#3e3e3e] rounded-xl hidden lg:flex justify-center items-center">
                        <WebCard />
                    </div>
                    <div className="w-full lg:w-4/5 h-full lg:bg-white rounded-xl p-3 gap-10 pb-5 lg:p-0 shadow-2xl border border-gray-300 flex lg:flex-row flex-col items-center justify-end">
                        <div className="w-full h-[80vh] p-3 md:p-5 bg-[#3e3e3e] rounded-xl lg:hidden flex justify-center items-center">
                            <WebCard />
                        </div>
                        <div className="w-full lg:w-3/5 h-[90vh] flex flex-col justify-between items-center lg:items-start">
                            <p className="text-4xl font-bold text-[#7dc642]">Liên hệ với chúng tôi</p>
                            <div className="w-full lg:w-10/12">
                                <div className="w-full mb-1">
                                    <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <div className="w-full mb-1">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <div className="w-full mb-1">
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <div className="w-full mb-1">
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <textarea className="w-full p-3 border border-[#3e3e3e] resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4" placeholder="Viết bình luận của bạn"></textarea>
                            </div>
                            <div className="w-10/12 flex justify-center">
                                <button className="relative w-1/3 overflow-hidden h-[50px] flex items-center justify-start bg-[#3e3e3e] rounded-xl cursor-pointer  group  duration-700 ease-linear">
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                                    <p className="text-lg w-full text-white font-bold z-10">
                                        Gửi đi
                                        <i class="fa-solid fa-paper-plane ml-3"></i>
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;