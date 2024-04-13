import React, { useContext } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Item from '../../components/Item/Item';
import CategorySelect from "./CategorySelect";
import AdvanceSelect from "./AdvanceSelect";
import RecommentSelect from "./RecommentSelect";
import PagePagination from "../../components/PagePagination/PagePagination";
import { AppContext } from "../../Context/AppContext";

const Store = () => {

    const { breadcrumb } = useContext(AppContext)

    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-1/3 mb-5">
                    <Breadcrumb
                        location={"Cửa hàng"}
                    />
                </div>
                <div className="w-full flex justify-end gap-5 mb-3">
                    <div className="w-1/5"></div>
                    <p className="text-lg font-bold w-4/5" >Kết quả tìm kiếm của <span className="text-[#7dc642]">"{breadcrumb}"</span></p>
                </div>
                <div className="w-full flex flex-row justify-between gap-5">
                    <div className="w-1/5 flex flex-col gap-5">
                        <CategorySelect />
                        <AdvanceSelect />
                        <RecommentSelect />
                    </div>
                    <div className="w-4/5  grid grid-cols-4 gap-5 ">
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end mt-10 px-10">
                    <PagePagination />
                </div>
            </div>
        </div>
    );
}

export default Store;