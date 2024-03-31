import React from "react";

const FarmBox = ({ farmImage, name, content }) => {
    return (
        <div className="w-full cursor-pointer group">
            <img
                src={farmImage}
                alt="image"
                className="w-full border border-[#3e3e3e] rounded-xl mb-4"
            />
            <div className="w-full flex flex-col items-center">
                <p className="w-full text-lg font-medium text-left">{name}</p>
                <div className="my-2 w-1/3 border border-[#3e3e3e]"></div>
                <p className="group-hover:text-green-600 ">{content}</p>
            </div>
        </div>
    );
}

export default FarmBox;