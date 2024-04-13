import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const CategorySelect = () => {
    const navigate = useNavigate()
    const { setBreadcrumb } = useContext(AppContext);

    function AddBreadcrumb(bread, path) {
        setBreadcrumb(bread);
        navigate(path);
    }
    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">DANH MỤC SẢN PHẨM</p>
            <ul className="w-full flex flex-col">
                <li
                    onClick={() => AddBreadcrumb("Thịt tươi", "/danh-muc/thit-tuoi")}
                    className="w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100">
                    Thịt tươi
                </li>
                <li
                    onClick={() => AddBreadcrumb("Hải sản", "/danh-muc/hai-san")}
                    className="w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100">
                    Hải sản
                </li>
                <li
                    onClick={() => AddBreadcrumb("Rau củ", "/danh-muc/rau-cu")}
                    className="w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100">
                    Rau củ
                </li>
                <li
                    onClick={() => AddBreadcrumb("Trái cây", "/danh-muc/trai-cay")}
                    className="w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100">
                    Trái cây
                </li>
                <li
                    onClick={() => AddBreadcrumb("Gói nấu ăn", "/danh-muc/goi-nau-an")}
                    className="w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100">
                    Gói nấu ăn
                </li>
            </ul>
        </div>
    );
}

export default CategorySelect;