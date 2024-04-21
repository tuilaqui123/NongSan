import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const OrderReceived = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                        location={"Hoá đơn đã nhận"}
                    />
                </div>
                <div className="w-full h-auto border border-gray-300 shadow-xl rounded-xl p-5 py-7">
                    <div className="w-full h-auto  flex flex-row flex-wrap items-center justify-between px-0">
                        <div className="flex flex-row justify-center items-center flex-wrap gap-5">
                            <div className="w-[200px] h-[200px] flex justify-center items-center relative">
                                <div className="absolute w-full h-full border flex justify-center items-center rounded-full border-green-700">
                                </div>
                                <div className=" absolute w-[150px] h-[150px] animate-pulse  border flex justify-center items-center rounded-full border-green-600">
                                </div>
                                <div className=" absolute w-[100px] h-[100px] animate-ping  border flex justify-center items-center rounded-full border-green-600">
                                </div>
                                <img
                                    src="http://nongsan.monamedia.net/template/assets/images/ods-icon.svg" alt=""
                                    className=" absolute animate-none w-[100px] h-[100px] p-5 rounded-full bg-green-100"
                                />
                            </div>

                            <div className="w-auto h-3/4  flex flex-col gap-5">
                                <p className="text-4xl font-bold text-[#7dc642]">Đặt hàng thành công!</p>
                                <div>
                                    <p>Đơn hàng đã thiết lập thành công.</p>
                                    <p>Chúng tôi sẽ liên lạc trực tiếp với quý khách để xác nhận.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-2/5 lg:w-1/4 flex items-center justify-end ">
                            <Link
                                to={"/cua-hang"}
                                className="relative bg-[#3e3e3e] w-full h-[50px] border border-white hover:border-[#7dc642] rounded-xl flex items-center group overflow-hidden mt-5"
                            >
                                <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                <p className="text-lg text-center w-full text-white font-bold z-10">Tiếp tục mua sắm</p>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-auto flex flex-col lg:flex-row items-start justify-between flex-wrap gap-5  border-t mt-5 pt-5 border-gray-300">

                        <div className="w-full lg:w-auto h-full">
                            <p className="text-2xl font-bold mb-5">Tóm tắt đơn hàng</p>
                            <div className="w-auto">
                                <div className="grid grid-cols-3">
                                    <p className="justify-self-start  text-gray-500">Mã đơn hàng</p>
                                    <p className="justify-self-center text-gray-500">Ngày mua hàng</p>
                                    <p className="justify-self-end  text-gray-500">Tổng tiền</p>
                                </div>
                                <div className="grid grid-cols-3">
                                    <p className="justify-self-start font-bold">934</p>
                                    <p className="justify-self-center font-bold">13/04/2023</p>
                                    <p className="justify-self-end font-bold">500.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto h-full flex flex-col sm:flex-row  justify-between gap-5 ">
                            <div className="w-auto">
                                <p className="text-2xl font-bold mb-5">Thông tin chuyển khoản</p>
                                <div className="w-full flex flex-row justify-between gap-5">
                                    <div>
                                        <img src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/img-vcb.png" />
                                    </div>
                                    <div>
                                        <div className="grid grid-cols-2">
                                            <p className="justify-self-center  text-gray-500">Chủ tài khoản</p>
                                            <p className="justify-self-end  text-gray-500">Số tài khoản</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="justify-self-center font-bold">PHAM NGOC QUI</p>
                                            <p className="justify-self-end font-bold">123456789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5">
                                <img
                                    src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/qr-code.jpg"
                                />
                            </div>
                        </div>

                        <div className="w-auto h-full ">
                            <p className="text-2xl font-bold mb-5 invisible">Tóm tắt đơn hàng</p>
                            <p className="text-gray-500">Phương thức thanh toán</p>
                            <p className="font-bold ">Chuyển khoản ngân hàng</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderReceived;
