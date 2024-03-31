import React, { useState } from "react";
import clsx from "clsx";
import Button from "../ButtonComponent/NavButon";
import logo from '../../assets/logo.png'
import RouterButton from "../ButtonComponent/RouterButton";

const NavBar = () => {
    const [sideBar, setSideBar] = useState(true)
    function showSideBar() {
        setSideBar(!sideBar);
    }
    return (
        <div className="w-full relative">
            <div className={clsx("fixed w-full h-screen z-30 flex flex-row", { 'hidden': sideBar })}>
                <div className="w-3/5 bg-[#3e3e3e] h-full p-3 z-30 flex flex-row-reverse gap-5">
                    <div onClick={showSideBar}>
                        <i class="fa-solid fa-square-xmark h-auto text-4xl text-white cursor-pointer hover:text-[#ff0000] duration-200"></i>
                    </div>
                    <div className="w-full h-full flex flex-col items-start gap-5">
                        <div className="w-full  rounded-xl p-2 py-3 px-4 border border-white group cursor-pointer hover:border-[#7dc642] duration-200">
                            <RouterButton path={"/tai-khoan"}>
                                <div class="flex flex-row items-center gap-2 cursor-pointer ">
                                    <div className="relative flex items-center justify-center">
                                        <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                        <i class="fa-solid fa-circle-user fa-2x text-white border-2 border-[#7dc642] rounded-full"></i>
                                    </div>
                                    <div>
                                        <p class="text-white font-normal text-sm text-left">Tài khoản</p>
                                        <p class="text-[#7dc642] font-medium text-sm text-left">Đăng nhập</p>
                                    </div>
                                </div>
                            </RouterButton>
                        </div>
                        <div className="w-full flex flex-col items-center justify-between">
                            <div className="relative w-full h-10 flex flex-row items-center">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="w-full h-full rounded-lg pl-5 text-base focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                                />
                                <div className="absolute w-1/5 right-0 h-full bg-[#7dc642] flex justify-center items-center rounded-lg cursor-pointer group">
                                    <i class="fa-solid fa-magnifying-glass text-lg text-white group-hover:text-[#3e3e3e] group-hover:text-xl duration-200"></i>
                                </div>
                            </div>
                        </div>

                        <ul className="w-full gap-5 lg:w-8/12 md:w-10/12 flex flex-col justify-between">
                            <Button path={"/"} onClick={showSideBar}>
                                <li className="flex items-center gap-3">
                                    <i class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"></i>
                                    <p className="text-lg font-normal text-white py-1 hover:text-[#7dc642]">Trang chủ</p>
                                </li>
                            </Button>
                            <Button path={"/gioi-thieu"} onClick={showSideBar}>
                                <li className="flex items-center gap-3">
                                    <i class="fa-solid fa-comment text-xl text-white py-1 group-hover:text-[#7dc642]"></i>
                                    <p className="text-lg font-normal text-white py-1 hover:text-[#7dc642]">Giới thiệu</p>
                                </li>
                            </Button>
                            <Button path={"/cua-hang"} onClick={showSideBar}>
                                <li className="flex items-center gap-3">
                                    <i class="fa-solid fa-store text-xl text-white py-1 group-hover:text-[#7dc642]"></i>
                                    <p className="text-lg font-normal text-white py-1 hover:text-[#7dc642]">Cửa hàng</p>
                                </li>
                            </Button>
                            <Button path={"/trang-trai"} onClick={showSideBar}>
                                <li className="flex items-center gap-3">
                                    <i class="fa-solid fa-tractor text-xl text-white py-1 group-hover:text-[#7dc642]"></i>
                                    <p className="text-lg font-normal text-white py-1 hover:text-[#7dc642]">Trang trại</p>
                                </li>
                            </Button>
                            <Button path={"/kien-thuc"} onClick={showSideBar}>
                                <li className="flex items-center gap-3">
                                    <i class="fa-solid fa-book text-xl text-white py-1 group-hover:text-[#7dc642]"></i>
                                    <p className="text-lg font-normal text-white py-1 hover:text-[#7dc642]">Kiến thức</p>
                                </li>
                            </Button>
                            <Button path={"/lien-he"} onClick={showSideBar}>
                                <li className="flex items-center gap-3">
                                    <i class="fa-solid fa-phone text-xl text-white py-1 group-hover:text-[#7dc642]"></i>
                                    <p className="text-lg font-normal text-white py-1 hover:text-[#7dc642]">Liên hệ</p>
                                </li>
                            </Button>
                        </ul>
                    </div>
                </div>
                <div className="absolute w-full h-full bg-white blur-xl opacity-40 brightness-90"></div>
            </div>

            <div className="w-full py-3 pt-5 px-3 sm:px-5 flex flex-col md:flex-row  items-center justify-between bg-[#3e3e3e]">
                <div className="w-full sm:w-2/5 md:w-1/5 flex items-center justify-between sm:justify-center">
                    <i class="fa-solid fa-bars text-white text-3xl sm:hidden cursor-pointer" onClick={showSideBar}></i>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-2/5 sm:w-full sm:mb-5 md:mb-0"
                    />
                    <div className="sm:hidden scale-125">
                        <RouterButton path={"/gio-hang"}>
                            <div class="flex flex-row items-center gap-2 cursor-pointer group ">
                                <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                    <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                    <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border-2 border-[#7dc642]"></i>
                                    <i class="fa-solid fa-cart-shopping text-[#3e3e3e]"></i>
                                </div>
                                <div className="hidden lg:block">
                                    <p class="text-white font-normal text-sm text-left">Giỏ hàng</p>
                                    <p class="text-[#7dc642] font-medium text-sm text-left">0 sản phẩm</p>
                                </div>
                            </div>
                        </RouterButton>
                    </div>
                </div>
                <div className="w-full md:w-9/12 hidden sm:flex flex-col items-start gap-5">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="relative h-10 flex flex-row items-center sm:w-11/12 lg:w-8/12">
                            <input
                                type="text"
                                placeholder="Nhập từ khoá tìm kiếm..."
                                className="w-full h-full rounded-lg pl-5 text-base focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                            />
                            <i class="fa-solid fa-magnifying-glass absolute mr-5 right-0 text-xl text-[#7dc642]"></i>
                        </div>
                        <div className=" flex flex-row justify-evenly gap-7 w-3/12 lg:gap-2 lg:justify-center sm:w-4/12 ">
                            <RouterButton path={"/tai-khoan"}>
                                <div class="flex flex-row items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                        <i class="fa-solid fa-circle-user fa-2x text-white border-2 border-[#7dc642] rounded-full"></i>
                                    </div>
                                    <div className="hidden lg:block">
                                        <p class="text-white font-normal text-sm text-left">Tài khoản</p>
                                        <p class="text-[#7dc642] font-medium text-sm text-left">Đăng nhập</p>
                                    </div>
                                </div>
                            </RouterButton>
                            <RouterButton path={"/gio-hang"}>
                                <div class="flex flex-row items-center gap-2 cursor-pointer group ">
                                    <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                        <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                        <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border-2 border-[#7dc642]"></i>
                                        <i class="fa-solid fa-cart-shopping text-[#3e3e3e]"></i>
                                    </div>
                                    <div className="hidden lg:block">
                                        <p class="text-white font-normal text-sm text-left">Giỏ hàng</p>
                                        <p class="text-[#7dc642] font-medium text-sm text-left">0 sản phẩm</p>
                                    </div>
                                </div>
                            </RouterButton>
                        </div>
                    </div>
                    <ul className="w-full lg:w-8/12 md:w-10/12 flex justify-between">
                        <Button path={"/"}>
                            <li>
                                <p className="text-base font-normal text-white py-1 hover:text-[#7dc642]">Trang chủ</p>
                            </li>
                        </Button>
                        <Button path={"/gioi-thieu"}>
                            <li>
                                <p className="text-base font-normal text-white py-1 hover:text-[#7dc642]">Giới thiệu</p>
                            </li>
                        </Button>
                        <Button path={"/cua-hang"}>
                            <li>
                                <p className="text-base font-normal text-white py-1 hover:text-[#7dc642]">Cửa hàng</p>
                            </li>
                        </Button>
                        <Button path={"/trang-trai"}>
                            <li>
                                <p className="text-base font-normal text-white py-1 hover:text-[#7dc642]">Trang trại</p>
                            </li>
                        </Button>
                        <Button path={"/kien-thuc"}>
                            <li>
                                <p className="text-base font-normal text-white py-1 hover:text-[#7dc642]">Kiến thức</p>
                            </li>
                        </Button>
                        <Button path={"/lien-he"}>
                            <li>
                                <p className="text-base font-normal text-white py-1 hover:text-[#7dc642]">Liên hệ</p>
                            </li>
                        </Button>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default NavBar;