import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CartItem from "./CartItem";
import UseDiscount from "./UseDiscount";
import RouterButton from "../../components/ButtonComponent/RouterButton";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                        location={"Giỏ hàng"}
                    />
                </div>
                <div className="w-full border border-gray-300 shadow-2xl flex items-center justify-center py-[5vh] rounded-xl ">
                    <div className="w-11/12 h-full flex flex-row">
                        <div className="w-full">
                            <div className="flex flex-row justify-between items-center w-full mb-10">
                                <p className="text-4xl font-bold">Giỏ hàng</p>
                                <p className="text-[#3e3e3e] font-bold">(7 sản phẩm)</p>
                            </div>
                            <div className="w-full flex flex-row ">
                                <div className="w-1/12"></div>
                                <p className="w-11/12 md:w-7/12 text-lg font-bold text-[#7dc642]">Sản phẩm</p>
                                <p className="w-2/12 text-lg text-center font-bold text-[#7dc642] md:block hidden">Số lượng</p>
                                <p className="w-2/12 text-lg text-end font-bold text-[#7dc642] md:block hidden">Thành tiền</p>
                            </div>
                            <div className="w-full">
                                <CartItem />
                                <CartItem />
                            </div>
                            <div className="w-full border-b-2 border-[#7dc642] mt-3"></div>

                            <div className="w-full h-auto mt-10 sm:mt-5 flex flex-col sm:flex-row sm:items-start items-center justify-between gap-10 md:gap-5">

                                <div className="w-10/12 h-full sm:w-1/2 md:w-2/5 grid grid-cols-1 ">
                                    <div className="w-full">
                                        <p className="text-xl text-left font-bold mb-3 pb-3 border-b">Ưu đãi & giảm giá</p>
                                        <div className="relative w-full flex items-center gap-3">
                                            <input
                                                type="text"
                                                className="w-full h-[45px] pr-[35%] pl-3  border border-[#3e3e3e] rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                            />
                                            <button className="absolute right-0 w-1/3 h-[45px] rounded-xl hover:border-[#7dc642] hover:bg-[#7dc642] group">
                                                <p className="font-medium group-hover:text-white">Áp dụng</p>
                                            </button>
                                        </div>
                                        <div className="w-full flex items-end justify-end">
                                            <p className="w-auto text-right font-medium mt-3 hover:text-[#7dc642] cursor-pointer">Mã giảm giá có sẳn</p>
                                        </div>
                                    </div>
                                    <div className="w-full hidden sm:grid grid-cols-1 gap-3 mt-10">
                                        <UseDiscount />
                                        <UseDiscount />
                                    </div>
                                </div>

                                <div className="w-1/2 sm:hidden border-b border-[#3e3e3e]"></div>

                                <div className="w-10/12 sm:w-1/2 md:w-2/5  flex flex-col justify-between items-center">
                                    <div className="w-full pb-5 border-b-2 border-[#3e3e3e]">
                                        <div className="flex flex-row justify-between items-end gap-3 mb-3">
                                            <p className="text-base font-bold">Mã giảm giá:</p>
                                            <p className="text-lg font-bold text-[#ff0000]">-500.000đ</p>
                                        </div>
                                        <div className="w-full flex flex-row justify-between items-end gap-3">
                                            <p className="text-xl font-bold">Tạm tính:</p>
                                            <p className="text-3xl font-bold text-[#7dc642]">500.000đ</p>
                                        </div>
                                    </div>
                                    <div className="w-full sm:hidden grid grid-cols-1 gap-3 mt-5">
                                        <UseDiscount />
                                        <UseDiscount />
                                    </div>
                                    <div className="w-4/5 flex flex-row mt-20">
                                        <Link
                                            to={"/thanh-toan"}
                                            className="relative bg-[#3e3e3e] w-full h-[50px] rounded-xl flex items-center group overflow-hidden"
                                        >
                                            <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                            <p className="text-lg text-center w-full text-white font-bold z-10">Đặt hàng</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-2/5 border-l pl-5 ml-5 hidden">
                            <p className="text-3xl text-center font-bold mb-5">Chi tiết đơn hàng</p>
                            <div>

                            </div>
                            <div className="flex flex-row items-end gap-3">
                                <p className="text-xl font-bold">Tổng tiền:</p>
                                <p className="text-3xl font-bold text-[#7dc642]">500.000đ</p>
                            </div>
                            <div className="w-full flex flex-row justify-center">
                                <Link
                                    to={"/thanh-toan"}
                                    className="relative bg-[#3e3e3e] w-4/5 h-[50px] rounded-xl flex items-center group overflow-hidden"
                                >
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                    <p className="text-lg text-center w-full text-white font-bold z-10">Đặt hàng</p>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full border-l pl-5 ml-5 hidden">
                            <div className="w-10/12">
                                <p className="text-3xl text-center font-bold mb-5">Ưu đãi & giảm giá</p>
                                <div className="w-full flex items-center gap-3 ">
                                    <input
                                        type="text"
                                        className="w-full h-[45px] pl-3 border border-[#3e3e3e] rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <button className="w-2/5 h-[45px] border border-[#3e3e3e] rounded-xl hover:border-[#7dc642] hover:bg-[#7dc642] group">
                                        <p className="font-medium group-hover:text-white">Áp dụng</p>
                                    </button>
                                </div>
                                <p className=" font-medium mt-3 hover:text-[#7dc642] cursor-pointer">Mã giảm giá có sẳn</p>
                                <div className="w-full flex flex-row justify-center mt-5">
                                    <button className="relative bg-white w-3/5 h-[50px] border border-[#3e3e3e] hover:border-[#7dc642] duration-300 ease-out rounded-xl flex items-center group overflow-hidden">
                                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                        <p className="text-lg text-center w-full text-[#3e3e3e] group-hover:text-white font-bold z-10 duration-300">Cập nhật đơn hàng</p>
                                    </button>
                                </div>
                                <div className="mt-3 flex flex-col gap-3">
                                    <UseDiscount />
                                    <UseDiscount />
                                    <UseDiscount />
                                    <UseDiscount />
                                    <UseDiscount />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;