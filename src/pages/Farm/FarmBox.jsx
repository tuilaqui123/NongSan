import React from "react";
import farmImg from '../../assets/farm.png'

const FarmBox = ({ onclick, isShow }) => {
    return (
        <div
            onClick={onclick}
            className="border border-gray-300 rounded-xl cursor-pointer flex justify-center items-center overflow-hidden hover:shadow-xl duration-200 group"
        >
            <img
                src={farmImg}
                className="group-hover:scale-110 duration-200"
            />
        </div>
    );
}

export default FarmBox;