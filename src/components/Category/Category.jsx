import React from "react";
import CategoryOption from "./CategoryOption";
import bg3 from '../../assets/bg/bg3.png'
import vegetables from '../../assets/icon/vegetables.png'
import vegetables_hover from '../../assets/icon/vegetables_hover.png'
import fruit from '../../assets/icon/fruit.png'
import fruit_hover from '../../assets/icon/fruit_hover.png'
import meat from '../../assets/icon/meat.png'
import meat_hover from '../../assets/icon/meat_hover.png'
import seafood from '../../assets/icon/seafood.png'
import seafood_hover from '../../assets/icon/seafood_hover.png'
import chef from '../../assets/icon/chef.png'
import chef_hover from '../../assets/icon/chef_hover.png'

const Category = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover" }}
            className="w-full h-screen bg-[#e7ede1] flex flex-col items-center justify-center"
        >
            <div className="w-11/12  flex flex-col items-center">
                <div className="text-center w-11/12 flex flex-col items-center">
                    <p className="w-1/2 text-3xl font-semibold pb-5 border-b-2 border-b-black mb-5">Danh mục sản phẩm</p>
                    <p className="text-4xl font-bold">Cửa hàng của chúng tôi cung cấp đa dạng các loại nông sản sạch, đảm bảo an toàn cho sức khỏe của bạn</p>
                </div>
                <div className="w-full h-auto flex flex-row gap-5">
                    <CategoryOption
                        img1={meat}
                        img2={meat_hover}
                        content={"Thịt tươi"}
                    />
                    <CategoryOption
                        img1={seafood}
                        img2={seafood_hover}
                        content={"Hải sản"}
                    />
                    <CategoryOption
                        img1={vegetables}
                        img2={vegetables_hover}
                        content={"Rau củ"}
                    />
                    <CategoryOption
                        img1={fruit}
                        img2={fruit_hover}
                        content={"Trái cây"}
                    />
                    <CategoryOption
                        img1={chef}
                        img2={chef_hover}
                        content={"Gói nguyên liệu"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Category;