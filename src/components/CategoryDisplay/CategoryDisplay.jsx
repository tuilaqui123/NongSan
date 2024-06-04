import React, {useContext} from "react";
import Item from "../Item/Item";
import SmallRouterButton from "../ButtonComponent/SmallRouterButton";
import bg3 from '../../assets/bg/bg3.png'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const CategoryDisplay = ({ mainColor, themeColor, itemColor, title, value }) => {
    const navigate = useNavigate()
    const { setBreadcrumb, setNavigateStore } = useContext(AppContext);
    const handleNavigate = (titleInput) => {
        switch (titleInput) {
            case "Thịt tươi":
                navigate('/cua-hang/thit-tuoi')
                setNavigateStore(true)
                setBreadcrumb(prev => ({ ...prev, child: 3, main: "Cửa hàng" , second: "Thịt tươi" }))
                break;
            case "Hải sản":
                navigate('/cua-hang/hai-san')
                setNavigateStore(true)
                setBreadcrumb(prev => ({ ...prev, child: 3, main: "Cửa hàng" , second: "Hải sản" }))
                break;
            case "Rau củ":
                navigate('/cua-hang/rau-cu')
                setNavigateStore(true)
                setBreadcrumb(prev => ({ ...prev, child: 3, main: "Cửa hàng" , second: "Rau củ" }))
                break;
            case "Trái cây":
                navigate('/cua-hang/trai-cay')
                setNavigateStore(true)
                setBreadcrumb(prev => ({ ...prev, child: 3, main: "Cửa hàng" , second: "Trái cây" }))
                break;
            case "Gói nguyên liệu":
                navigate('/cua-hang/goi-nau-an')
                setNavigateStore(true)
                setBreadcrumb(prev => ({ ...prev, child: 3, main: "Cửa hàng" , second: "Gói nấu ăn" }))
                break;
            default:
                break;
        }
    }
    return (
        <div
            className={`w-full bg-${themeColor} flex flex-col items-center `}
            style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover" }}
        >
            {/* <div className={`h-10 w-full bg-${mainColor} bg-[url(${logo})] bg-repeat-space bg-contain`}></div> */}
            {/* <div className={`h-10 w-full bg-${mainColor} blur-md`}></div> */}
            <div className="w-11/12 py-20 ">
                <div className="w-full flex flex-row items-center justify-between mb-10">
                    <h1 className={`text-3xl sm:text-5xl font-bold pl-5 border-l-4 border-${mainColor} text-${mainColor}`}>{title}</h1>
                    <SmallRouterButton
                        btnColor={mainColor}
                    >
                        <p onClick={() => handleNavigate(title)}>Xem thêm</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </SmallRouterButton>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
                    {value
                        .filter(ele => ele.type.includes(title)) // Lọc các phần tử theo điều kiện
                        .slice(0, 10) // Lấy chỉ 10 phần tử đầu tiên
                        .map((ele, index) => (
                            <Item
                                key={index}
                                itemColor={itemColor}
                                value={ele}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default CategoryDisplay;