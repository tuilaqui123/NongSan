import React from "react";
import RecommentBox from "./RecommentBox";

const RecommentSelect = () => {
    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">SẢN PHẨM</p>
            <div className="w-full">
                <RecommentBox />
                <RecommentBox />
                <RecommentBox />
                <RecommentBox />
                <RecommentBox />
                <RecommentBox />
            </div>
        </div>
    );
}

export default RecommentSelect;