import React from "react";
import farmImg from '../../assets/farm.png'

const FarmBox = ({ onclick, isShow, value }) => {
    return (
        <>
            {value && (
                <div
                    onClick={onclick}
                    className="border border-gray-300 rounded-xl cursor-pointer flex justify-center items-center overflow-hidden hover:shadow-xl duration-200 group"
                >
                    <img
                        src={value.image}
                        className="w-auto h-[150px] group-hover:scale-110 duration-200"
                    />
                </div>
            )}
        </>
    );
}

export default FarmBox;