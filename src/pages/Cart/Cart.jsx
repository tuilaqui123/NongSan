import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CartItem from "./CartItem";
import UseDiscount from "./UseDiscount";
import RouterButton from "../../components/ButtonComponent/RouterButton";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-1/3 mb-5">
                    <Breadcrumb
                        location={"Giỏ hàng"}
                    />
                </div>
                <div className="w-full border border-gray-300 shadow-2xl flex items-center justify-center py-[10vh] rounded-xl ">
                    <div className="w-11/12 h-full flex flex-row">
                        <div className="w-3/5">
                            <div className="flex flex-row justify-between items-center w-full mb-10">
                                <p className="text-4xl font-bold">Giỏ hàng</p>
                                <p className="text-[#3e3e3e] font-bold">(7 sản phẩm)</p>
                            </div>
                            <div className="w-full flex flex-row ">
                                <div className="w-1/12"></div>
                                <p className="w-7/12 text-lg font-bold text-[#7dc642]">Sản phẩm</p>
                                <p className="w-2/12 text-lg text-center font-bold text-[#7dc642]">Số lượng</p>
                                <p className="w-2/12 text-lg text-end font-bold text-[#7dc642]">Thành tiền</p>
                            </div>
                            <div className="w-full">
                                <CartItem />
                                <CartItem />
                            </div>
                            <div className="w-full border-b-2 border-[#7dc642] mt-3"></div>
                            <div className="w-full mt-10 flex flex-row justify-between items-center ">
                                <div className="w-3/5 flex flex-row">
                                    <Link
                                        to={"/thanh-toan"}
                                        className="relative bg-[#3e3e3e] w-2/5 h-[50px] rounded-xl flex items-center group overflow-hidden"
                                    >
                                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                        <p className="text-lg text-center w-full text-white font-bold z-10">Đặt hàng</p>
                                    </Link>
                                </div>
                                <div className="flex flex-row items-end gap-3">
                                    <p className="text-xl font-bold">Tổng tiền:</p>
                                    <p className="text-3xl font-bold text-[#7dc642]">500.000đ</p>
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



                        <div className="w-2/5 border-l pl-5 ml-5 ">
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