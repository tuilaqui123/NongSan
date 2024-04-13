import React from "react";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import logo from '../../assets/logo.png'

const Contact = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-1/3 mb-5">
                    <Breadcrumb
                        location={"Liên hệ"}
                    />
                </div>
                <div className="relative w-full h-screen flex flex-row justify-end items-center">
                    <div className="absolute left-0 w-1/2 h-[90vh] bg-[#3e3e3e] rounded-xl flex justify-center items-center">
                        <div className="w-[90%] h-[90%] flex flex-col items-center gap-5 border rounded-xl p-5">
                            <img
                                src={logo}
                                className="w-1/2 "
                            />
                            <div className="border-b border-[#bbbbbb] w-3/4"></div>
                            <p className="w-full text-white font-bold text-xl mt-5">THÔNG TIN LIÊN HỆ</p>
                            <div className="w-full flex flex-row items-center gap-3">
                                <div className="w-[50px] h-[50px] bg-[#7dc642] flex justify-center items-center rounded-full">
                                    <i class="fa-solid fa-envelope text-xl text-white"></i>
                                </div>
                                <div className="h-[50px] flex flex-col justify-between">
                                    <p className="text-[15px] font-medium text-white">Email</p>
                                    <p className="text-lg font-bold text-[#7dc642]">fudee.contact@gmail.com</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row items-center gap-3">
                                <div className="w-[50px] h-[50px] bg-[#7dc642] flex justify-center items-center rounded-full">
                                    <i class="fa-solid fa-phone text-xl text-white"></i>
                                </div>
                                <div className="h-[50px] flex flex-col justify-between">
                                    <p className="text-[15px] font-medium text-white">Số điện thoại</p>
                                    <p className="text-lg font-bold text-[#7dc642]">0912725561</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center gap-1">
                                <div className="w-full flex flex-row items-center gap-3">
                                    <div className="w-[50px] h-[50px] bg-[#7dc642] flex justify-center items-center rounded-full">
                                        <i class="fa-solid fa-location-dot text-xl text-white"></i>
                                    </div>
                                    <div className="h-[50px] flex flex-col justify-between">
                                        <p className="text-[15px] font-medium text-white">Địa chỉ</p>
                                        <p className="text-lg font-bold text-[#7dc642]">Trường Đại học Công Nghệ Thông Tin</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row items-center gap-3">
                                    <div className="w-[50px]"></div>
                                    <a href="https://maps.app.goo.gl/TNkRmH6uTDPtwyL6A" target="_blank"
                                        className="text-sm text-white hover:underline italic"
                                    >
                                        Đường dẫn Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/5 h-full bg-white rounded-xl shadow-2xl border border-gray-300 flex items-center justify-end">
                        <div className="w-3/5 h-[90vh] flex flex-col justify-between">
                            <p className="text-4xl font-bold text-[#7dc642]">Liên hệ với chúng tôi</p>
                            <div>
                                <div className="w-10/12 mb-1">
                                    <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <div className="w-10/12 mb-1">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <div className="w-10/12 mb-1">
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <div className="w-10/12 mb-1">
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ"
                                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                                </div>
                                <textarea className="w-10/12 p-3 border border-[#3e3e3e] resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4" placeholder="Viết bình luận của bạn"></textarea>
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