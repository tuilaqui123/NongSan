import React from "react";
import logo from '../../assets/logo.png'
import Button from '../ButtonComponent/NavButon'

const Footer = () => {
    return (
        <div className="w-full h-auto bg-[#3e3e3e] grid lg:grid-cols-6 lg:grid-rows-1 p-3 md:grid-rows-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 grid-rows-3 gap-5 sm:gap-10 pb-24">
            <div className="w-full col-span-2">
                <div className="w-full h-1/3 mb-5 flex items-end">
                    <img
                        src={logo}
                        alt="logo"
                        className="md:w-3/5 sm:w-1/3 w-1/2"
                    />
                </div>
                <ul className="flex flex-col gap-3">
                    <Button>
                        <li className="flex items-center gap-2 text-white ">
                            <i class="fa-solid fa-location-dot text-lg group-hover:text-[#7dc642]"></i>
                            <p className="text-base font-medium text-[#bbbbbb] group-hover:text-[#7dc642]">Trường Đại học Công Nghệ Thông Tin</p>
                        </li>
                    </Button>
                    <Button>
                        <li className="flex items-center gap-2 text-white">
                            <i class="fa-solid fa-envelope text-lg group-hover:text-[#7dc642]"></i>
                            <p className="text-base text-[#bbbbbb] font-medium group-hover:text-[#7dc642]">21520419@gm.uit.edu.vn</p>
                        </li>
                    </Button>
                    <Button>
                        <li className="flex items-center gap-2 text-white">
                            <i class="fa-solid fa-phone text-lg group-hover:text-[#7dc642]"></i>
                            <p className="text-base font-medium text-[#bbbbbb] group-hover:text-[#7dc642]">0912725561</p>
                        </li>
                    </Button>
                </ul>
            </div>
            <div className="w-full">
                <div className="w-full sm:h-1/3 mb-5 flex items-end">
                    <p className="text-white text-2xl font-bold">Sản phẩm</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium ">
                            <p className="group-hover:text-[#7dc642]">Thịt tươi</p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Hải sản
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Rau củ
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Trái cây
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Gói nguyên liệu
                            </p>
                        </li>
                    </Button>
                </ul>
            </div>
            <div className="w-full">
                <div className="w-full sm:h-1/3 mb-5 flex items-end">
                    <p className="text-white text-2xl font-bold">Danh mục</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium ">
                            <p className="group-hover:text-[#7dc642]">
                                Trang chủ
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Giới thiệu
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Cửa hàng
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Trang trại
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Kiến thức
                            </p>
                        </li>
                    </Button>
                    <Button>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Liên hệ
                            </p>
                        </li>
                    </Button>
                </ul>
            </div>
            <div className="w-full col-span-2 ">
                <div className="w-full h-1/3 mb-5 flex items-end">
                    <p className="text-white text-2xl font-bold">Đăng ký</p>
                </div>
                <p className="text-base text-[#bbbbbb] font-medium mb-3">Đăng ký ngay để nhận được thông tin mới nhất từ chúng tôi</p>
                <div className="w-full flex flex-row gap-3">
                    <input
                        type="text"
                        placeholder="Email.."
                        className="w-3/5 h-9 rounded-lg pl-3 focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                    />
                    <button className="relative md:w-1/3 w-1/5 h-9 flex items-center justify-start bg-[#3e3e3e] rounded-lg cursor-pointer border border-white group hover:border-none duration-700 ease-linear">
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                        <p className="text-sm text-center w-full text-white font-medium z-10">ĐĂNG KÝ</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;