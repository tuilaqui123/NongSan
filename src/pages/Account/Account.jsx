import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import avt from '../../assets/cmt.jpg'
import clsx from "clsx";
import AccountButton from "./AccountButton";
import AccountInfo from "./AccountInfo";
import OrderHistory from "./OrderHistory";
import Discount from "./Discount";


const Account = () => {
    const [select, setSelect] = useState(1)

    function Choose(choose) {
        setSelect(choose)
    }

    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-1/3 mb-5">
                    <Breadcrumb
                        location={"Tài khoản"}
                    />
                </div>
                <div className="relative w-full h-auto flex flex-row justify-end ">
                    <div className="absolute left-0 w-1/3 h-[80vh] bg-[#3e3e3e] rounded-xl flex justify-center items-center mt-[10vh]">
                        <div className="w-[90%] h-[90%] flex flex-col items-center  gap-5 border rounded-xl p-5">
                            <div className="w-full flex flex-row gap-3">
                                <img
                                    src={avt}
                                    className="rounded-full border-2 border-white w-1/6"
                                />
                                <div className="flex flex-col justify-between">
                                    <p className="text-white font-bold text-xl">Phạm Ngọc Qúi</p>
                                    <p className="cursor-pointer text-white font-semibold italic">Đăng xuất</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-5 mt-10">
                                <AccountButton
                                    icon={"fa-solid fa-user"}
                                    name={"Thông tin tài khoản"}
                                    position={1}
                                    select={select}
                                    onclick={() => Choose(1)}
                                />
                                <AccountButton
                                    icon={"fa-solid fa-list"}
                                    name={"Lịch sử đơn hàng"}
                                    position={2}
                                    select={select}
                                    onclick={() => Choose(2)}
                                />
                                <AccountButton
                                    icon={"fa-solid fa-location-dot"}
                                    name={"Địa chỉ"}
                                    position={3}
                                    select={select}
                                    onclick={() => Choose(3)}
                                />
                                <AccountButton
                                    icon={"fa-solid fa-tag"}
                                    name={"Mã giảm giá"}
                                    position={4}
                                    select={select}
                                    onclick={() => Choose(4)}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="w-[85%] h-auto bg-white rounded-xl shadow-2xl border border-gray-300 flex items-center justify-end py-[10vh]">
                        <div className="w-9/12 h-auto flex flex-col justify-between">
                            <Discount />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;