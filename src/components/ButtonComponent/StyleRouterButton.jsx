import React from "react";
import { Link } from "react-router-dom";

const styleRouterButton = ({ onClick, children, path, width, py, px, topColor, bottomColor, responsive }) => {
    return (
        <Link to={path}>
            <button
                type="button"
                onClick={onClick}
                className={`relative flex flex-row items-center lg:w-${width} ${responsive} bg-${bottomColor} rounded-[50px]  cursor-pointer group`}
            >
                <div className={`absolute w-3/4 h-full bg-${topColor} rounded-[50px]  group-hover:w-full duration-200`}></div>
                <div className={`py-${py} px-${px} flex flex-row items-center justify-center gap-5 z-20 relative`}>
                    {children}
                </div>
                <div className="z-20 w-11/12 absolute flex justify-end  items-end">
                    <i class="fa-solid fa-arrow-right text-white justify-self-end"></i>
                </div>
            </button>
        </Link>
    );
};

export default styleRouterButton;