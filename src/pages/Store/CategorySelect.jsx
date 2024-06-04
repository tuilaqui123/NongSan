import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const CategorySelect = ({ setLocation }) => {
    const [isClick, setIsClick] = useState(0)
    const navigate = useNavigate()
    const { breadcrumb, setBreadcrumb } = useContext(AppContext);

    function AddBreadcrumb(bread, path, pos) {
        setIsClick(pos)
        setBreadcrumb(prev => ({ ...prev, second: bread }))
        setLocation(bread);
        navigate(path);
    }
    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">DANH MỤC SẢN PHẨM</p>
            <ul className="w-full flex flex-col">
                <li
                    onClick={() => AddBreadcrumb("Thịt tươi", "/cua-hang/thit-tuoi", 1)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick===1 || breadcrumb.second === 'Thịt tươi' ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Thịt tươi
                </li>
                <li
                    onClick={() => AddBreadcrumb("Hải sản", "/cua-hang/hai-san", 2)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick===2 || breadcrumb.second === 'Hải sản' ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Hải sản
                </li>
                <li
                    onClick={() => AddBreadcrumb("Rau củ", "/cua-hang/rau-cu", 3)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick===3 || breadcrumb.second === 'Rau củ' ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Rau củ
                </li>
                <li
                    onClick={() => AddBreadcrumb("Trái cây", "/cua-hang/trai-cay", 4)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick===4 || breadcrumb.second === 'Trái cây' ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Trái cây
                </li>
                <li
                    onClick={() => AddBreadcrumb("Gói nấu ăn", "/cua-hang/goi-nau-an", 5)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick===5 || breadcrumb.second === 'Gói nấu ăn' ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Gói nấu ăn
                </li>
            </ul>
        </div>
    );
}

export default CategorySelect;