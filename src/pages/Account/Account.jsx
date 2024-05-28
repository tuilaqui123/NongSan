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
    const [navSlide, setNavSlide] = useState(false)

    function Choose(choose) {
        setSelect(choose)
    }


    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                        location={"Tài khoản"}
                    />
                </div>
                <div className=" w-full h-auto bg-white flex flex-row overflow-hidden justify-end border shadow-2xl">
                    <div className=" w-1/3 h-full bg-[#3e3e3e] hidden p-3 lg:flex justify-center items-center">
                        <div className="w-full h-full flex flex-col items-center  gap-5 border  p-5">
                            <div className="w-3/5 flex flex-col gap-3">
                                <img
                                    src={avt}
                                    className="w-full border-2 border-white "
                                />
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
                    <div className=" w-full lg:w-2/3 h-auto bg-white rounded-xl shadow-2xl  flex flex-col lg:flex-row items-start lg:justify-end gap-5 lg:gap-0 p-3 lg:py-[5vh]">
                        <div className="h-[80vh] lg:block hidden"></div>
                        <div className={` w-full h-auto rounded-t-xl lg:hidden flex flex-col p-3 bg-[#3e3e3e] gap-3 duration-300 ease-out`}>
                            <div className="w-full flex flex-row   items-start justify-between">
                                <div className="w-auto flex flex-row gap-3">
                                    <img
                                        src={avt}
                                        className="w-[60px] h-[60px] rounded-full border-2 border-white "
                                    />
                                    <div className="w-full flex flex-col justify-between">
                                        <p className="text-white font-bold text-xl">Phạm Ngọc Qúi</p>
                                        <p className="cursor-pointer text-white font-semibold italic">Đăng xuất</p>
                                    </div>
                                </div>

                                {/* caret button */}
                                <div
                                    onClick={() => setNavSlide(!navSlide)}
                                >
                                    <div className="w-[50px] h-[50px] rounded-full hover:bg-[#7dc642] duration-150 border hover:border-[#7dc642] flex items-center justify-center cursor-pointer">
                                        <i
                                            // className="fa-solid fa-caret-down text-3xl text-white"
                                            className={clsx({
                                                "fa-solid fa-caret-down text-3xl text-white": navSlide,
                                                "fa-solid fa-caret-down text-3xl text-white rotate-[-90deg]": !navSlide
                                            })}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                            {navSlide && (
                                <div className="w-full sm:w-2/5 flex flex-col gap-5 mt-5">
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
                            )}
                        </div>

                        <div className="w-full lg:w-9/12 h-full flex flex-col justify-between ">
                            <AccountInfo
                                position={1}
                                select={select}
                            />
                            <OrderHistory
                                position={2}
                                select={select}
                            />
                            <Discount
                                position={4}
                                select={select}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;