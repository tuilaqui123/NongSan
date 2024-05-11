import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import itemImg from '../../assets/image/item.png';
import QuantitySelection from "./QuantitySelection";
import { Link } from "react-router-dom";
import ItemInfo from "./ItemInfo";
import ItemComment from "./ItemComment";
import clsx from "clsx";
import RecommentItem from "../../components/RecommentItem/RecommentItem";

const ItemDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const [showInfo, setShowInfo] = useState(true)
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-2/3 mb-10">
                    <Breadcrumb
                        location={"ok"}
                    />
                </div>
                <div className="w-11/12 flex flex-row gap-10">
                    <div className="w-1/2 border rounded-xl">
                        <img
                            src={itemImg}
                            className="w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="w-full pb-5 mb-5 border-b border-gray-300">
                            <div className="flex flex-row gap-1">
                                <p className="text-white text-sm text-center px-2 py-1 bg-[#3e3e3e] rounded-lg cursor-pointer hover:bg-[#7dc642]">-40%</p>
                                <p className="text-white text-sm text-center px-2 py-1 bg-[#3e3e3e] rounded-lg cursor-pointer hover:bg-[#7dc642]">2 tặng 1</p>
                            </div>
                            <p className="text-4xl font-bold mt-2 mb-1">RAU XÀ LÁCH</p>
                            <p className="italic text-sm mb-2">Dưa hấu đỏ từ <span className="font-semibold">1,8kg </span>trở lên</p>
                            <p className="font-bold flex flex-row items-center">Trang trại:
                                <Link className="group">
                                    <div className="ml-1 hover:bg-[#7dc642]  px-2 py-1 rounded-lg">
                                        <p className="font-bold text-[#7dc642] group-hover:text-white">VinaFarm</p>
                                    </div>
                                </Link>
                            </p>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex flex-row items-end gap-3">
                                <p className="font-bold text-4xl">40.000đ</p>
                                <p className="text-[16px] font-medium text-gray-500 line-through">100.000đ</p>
                                <p className="text-xl font-bold">/1 trái</p>
                            </div>
                            <div className="w-full">
                                <p className="font-bold mt-3">Mô tả sản phẩm:</p>
                                <p>Thành phần trong mật ong hoa nhãn có rất nhiều loại Vitamin và axit amin quan trọng như A, B1, B2, tiền tố Acid Folic… Việc sử dụng mật ong hàng ngày giúp cho chúng ta có một cơ thể khoẻ mạnh, tăng cường sức đề kháng. Giúp ăn ngon miệng, ngủ sâu giấc, có một làn da hồng hào, tươi sáng.</p>
                            </div>
                            <div className="w-full mt-3">
                                <QuantitySelection
                                    quantity={quantity}
                                    updateQuantity={setQuantity}
                                    limit={20}
                                />
                            </div>
                            <div className="flex flex-row mt-5 gap-3">
                                <button className="relative overflow-hidden w-1/3 h-[60px] flex items-center justify-start bg-[#3e3e3e] rounded-xl cursor-pointer  group  duration-700 ease-linear">
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                                    <p className="text-lg w-full text-white font-bold z-10">Thanh toán</p>
                                </button>
                                <button className="relative overflow-hidden w-1/3 h-[60px] flex items-center justify-start bg-white border border-[#3e3e3e] rounded-xl cursor-pointer group hover:border-none duration-0">
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                                    <p className="text-lg w-full text-[#3e3e3e] group-hover:text-white duration-150 font-bold z-10">Thêm vào giỏ</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 h-auto grid grid-cols-4 mt-20 bg-gray-200 rounded-lg gap-5 py-7 px-5 ">
                <div className="w-full col-span-3">
                    <div className="flex flex-row gap-3">
                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            className={clsx({
                                "w-1/4 h-[60px] rounded-xl bg-[#7dc642] duration-150": showInfo,
                                "relative overflow-hidden w-1/4 h-[60px] flex items-center justify-start border border-[#3e3e3e] rounded-xl cursor-pointer group hover:border-none duration-0": !showInfo
                            })}>
                            {!showInfo && (
                                <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                            )}
                            <p className={clsx({
                                "text-lg font-bold text-white": showInfo,
                                "text-lg w-full text-[#3e3e3e] group-hover:text-white duration-150 font-bold z-10": !showInfo
                            })}>
                                Thông tin sản phẩm</p>
                        </button>
                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            className={clsx({
                                "w-1/4 h-[60px] rounded-xl bg-[#7dc642] duration-150": !showInfo,
                                "relative overflow-hidden w-1/4 h-[60px] flex items-center justify-start border border-[#3e3e3e] rounded-xl cursor-pointer group hover:border-none duration-0": showInfo
                            })}>
                            {showInfo && (
                                <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                            )}
                            <p className={clsx({
                                "text-lg font-bold text-white": !showInfo,
                                "text-lg w-full text-[#3e3e3e] group-hover:text-white duration-150 font-bold z-10": showInfo
                            })}>
                                Bình luận</p>
                        </button>
                    </div>
                    <div className="w-full mt-5">
                        {showInfo ? (
                            <ItemInfo />
                        ) : (
                            <ItemComment />
                        )}
                    </div>
                </div>
                <div className="w-full col-span-1 border-l border-[#3e3e3e] flex flex-col gap-10 pl-3">
                    <div className="flex flex-row p-1 justify-between">
                        <div>
                            <img className="w-14 h-14" src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/dt-ship-1.svg" alt="" decoding="async" loading="lazy" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between">
                            <p className="font-bold text-lg">Cam kết</p>
                            <p className="text-base font-medium">Nguồn gốc rõ ràng, 100% chính hãng</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-1 justify-between">
                        <div>
                            <img className="w-14 h-14" src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/dt-ship-2.svg" alt="" decoding="async" loading="lazy" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between">
                            <p className="font-bold text-lg">Giao hàng</p>
                            <p className="text-base font-medium">T2 - CN | 08:00 - 20:00</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-1 justify-between">
                        <div>
                            <img className="w-14 h-14" src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/dt-ship-3.svg" alt="" decoding="async" loading="lazy" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between">
                            <p className="font-bold text-lg">Hỗ trợ 24/7</p>
                            <p className="text-base font-medium">Với chatbox thông minh, facebook và hotline</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20">
                <RecommentItem />
            </div>
        </div>
    );
}

export default ItemDetails;