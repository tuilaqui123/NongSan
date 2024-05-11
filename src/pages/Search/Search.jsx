import React from "react";
import Item from "../../components/Item/Item";
import RecommentSelect from "../Store/RecommentSelect";

const Search = () => {
    return (
        <div className="relative w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12 mt-5">
                <p className="text-xl">Tìm kiếm của: <span className="font-bold">"ok"</span></p>
                <div className="grid grid-cols-4  mt-5 gap-5">
                    <div className="col-span-3 grid grid-cols-4 gap-5">
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
                    <div className="col-span-1">
                        <RecommentSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;