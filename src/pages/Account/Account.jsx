import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import avt from '../../assets/cmt.jpg'
import clsx from "clsx";
import AccountButton from "./AccountButton";
import AccountInfo from "./AccountInfo";
import OrderHistory from "./OrderHistory";
import Discount from "./Discount";
import bgcover1 from '../../assets/bgcover1.png'
import BubblesBG from "../../components/Background/Bubbles";


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
            </div>
            {/* <div className="w-[95%] relative">
                <div className="absolute w-full z-10 flex items-center justify-center">
                    <img
                        src={bgcover1}
                        className="relative w-full h-screen z-10"
                    />
                    <BubblesBG />
                </div> */}
            <div className="w-full h-auto bg-transparent flex flex-row justify-between gap-6 p-6 rounded-xl relative z-40">
                <div className=" w-1/4 h-full bg-white flex flex-col justify-center items-center border shadow-2xl rounded-lg p-5 py-7">
                    <div className="w-2/5 flex flex-col gap-3">
                        <img
                            src={avt}
                            className="w-full border-2 border-[#7dc642] rounded-full"
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

                <div className="w-3/4 bg-white border rounded-lg p-7">ok</div>
            </div>

        </div>

        // </div>
    );
}

export default Account;