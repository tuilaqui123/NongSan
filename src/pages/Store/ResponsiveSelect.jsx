import React from "react";
import '../../hiddenScroll.css'
import CategorySelect from "./CategorySelect";
import AdvanceSelect from "./AdvanceSelect";
import RecommentSelect from "./RecommentSelect";

const ResponsiveSelect = ({ onclick }) => {
    return (
        <div className="fixed top-0 left-0 z-20 w-full h-full overflow-hidden overflow-y-scroll scrollable-div">
            <div className="sticky h-auto w-3/4 bg-white z-30 p-3 flex flex-row-reverse gap-5 ">
                <div >
                    <i
                        onClick={onclick}
                        class="fa-solid fa-square-xmark h-auto text-4xl text-[#3e3e3e]  cursor-pointer hover:text-[#ff0000] duration-200"
                    ></i>
                </div>
                <div className="w-full h-full flex flex-col items-start gap-5">
                    <CategorySelect />
                    <AdvanceSelect />
                    <RecommentSelect />
                </div>
            </div>
        </div>
    );
}

export default ResponsiveSelect;