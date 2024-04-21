import React from "react";
import avt from '../../assets/cmt.jpg'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                        location={"Thanh toán"}
                    />
                </div>
                <div className=" w-full h-auto flex flex-row justify-center items-center border border-gray-300 py-[5vh] rounded-xl shadow-2xl">
                    <div className="w-[95%] h-[90%] flex flex-col md:flex-row gap-10 justify-between">
                        <div className="w-full md:w-[55%] lg:w-3/5 h-auto">
                            <p className="text-4xl font-bold mb-10">Thông tin giao hàng</p>
                            <div className=" mb-7 flex flex-row md:flex-col lg:flex-row gap-5">
                                <button className="bg-[#7dc642] w-1/2 sm:w-1/3 md:w-2/3 lg:w-2/5 h-[50px] rounded-xl">
                                    <p className="text-white font-medium">Sử dụng thông tin có sẵn</p>
                                </button>
                                <button
                                    className="relative bg-white  w-1/2 sm:w-1/3 md:w-2/3 lg:w-2/5 border border-[#3e3e3e] hover:border-[#7dc642] duration-150 ease-out h-[50px] rounded-xl flex items-center group overflow-hidden group"
                                >
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                    <p className="text-center w-full text-[#3e3e3e] group-hover:text-white font-bold z-10">Nhập thông tin khác</p>
                                </button>
                            </div>
                            <div className="flex flex-col gap-7">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Họ và tên<span className="text-[#f1564b] font-bold"> *</span></p>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                        className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Email<span className="text-[#f1564b] font-bold"> *</span></p>
                                    <input
                                        type="text"
                                        placeholder="Nhập email"
                                        className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Số điện thoại<span className="text-[#f1564b] font-bold"> *</span></p>
                                    <input
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                        className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Ghi chú</p>
                                    <textarea className="w-4/5 p-3 resize-none rounded-xl border border-[#3e3e3e] focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4" placeholder="Viết bình luận của bạn"></textarea>

                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Tỉnh / Thành phố<span className="text-[#f1564b] font-bold"> *</span></p>
                                    <select className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Quận / Huyện</p>
                                    <select className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <p className="w-1/3 font-medium">Địa chỉ<span className="text-[#f1564b] font-bold"> *</span></p>
                                    <input
                                        type="text"
                                        placeholder="Nhập địa chỉ"
                                        className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                <p className="font-bold text-xl mb-5">Phương thức thanh toán<span className="text-[#f1564b] font-bold"> *</span></p>
                                <div className="w-full flex flex-row gap-5">
                                    <div className="w-2/5 lg:w-1/4 p-3 rounded-xl flex flex-col items-center border-2 border-[#7dc642] gap-3 bg-gray-100 cursor-pointer">
                                        <img src="http://nongsan.monamedia.net/template/assets/images/c-form-method-4.png" alt="" />
                                        <p className="text-center w-4/5">Thanh toán tiền mặt</p>
                                    </div>
                                    <div className="w-2/5 lg:w-1/4 p-3 rounded-xl flex flex-col items-center border gap-3 bg-gray-100 cursor-pointer">
                                        <img src="http://nongsan.monamedia.net/template/assets/images/c-form-method-2.png" />
                                        <p className="text-center ">Chuyển khoản ngân hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 h-auto bg-[#3e3e3e]  flex justify-center items-center rounded-xl p-5">
                            <div className="w-full h-full flex flex-col items-center gap-5 border rounded-xl p-4 pb-10">
                                <p className="text-3xl md:text-2xl lg:text-3xl font-bold text-[#7dc642] pb-3 mb-3 border-b border-gray-300">Chi tiết đơn hàng</p>
                                {/* <div className="w-full flex flex-col gap-3"> */}
                                <div className="w-full flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-3">
                                    <CheckoutItem />
                                    <CheckoutItem />
                                    <CheckoutItem />
                                    <CheckoutItem />
                                    <CheckoutItem />
                                    <CheckoutItem />
                                </div>
                                <div className="w-2/3 my-3  border-b border-gray-300"></div>
                                <div className="w-full flex flex-col gap-3">
                                    <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-end text-white">
                                        <p className="font-bold w-auto md:w-full lg:w-auto">Tạm tính:</p>
                                        <p className="text-lg font-bold text-[#7dc642]">500.000đ</p>
                                    </div>
                                    <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-end text-white">
                                        <p className="font-bold w-auto md:w-full lg:w-auto">Phí giao hàng:</p>
                                        <p className="text-lg font-bold text-[#7dc642]">30.000đ</p>
                                    </div>
                                    <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-end text-white">
                                        <p className="font-bold w-auto md:w-full lg:w-auto">Giảm giá:</p>
                                        <p className="text-lg font-bold text-[#7dc642]">-30.000đ</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-end text-white mt-7">
                                    <p className=" text-xl font-bold w-auto md:w-full lg:w-auto">Tổng tiền:</p>
                                    <p className="text-2xl font-bold text-[#7dc642]">1.000.000đ</p>
                                </div>
                                <Link
                                    to={"/hoa-don"}
                                    className="relative bg-[#3e3e3e] w-4/5 h-[50px] border border-white hover:border-[#7dc642] rounded-xl flex items-center group overflow-hidden mt-5"
                                >
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                    <p className="text-lg text-center w-full text-white font-bold z-10">Đặt hàng</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;