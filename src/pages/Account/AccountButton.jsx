import React from "react";
import clsx from "clsx";

const AccountButton = ({ icon, name, position, select, onclick }) => {

    return (
        <div
            onClick={onclick}
            className={clsx({
                "p-[6px] border border-white rounded-full cursor-pointer overflow-hidden": position == select,
                "p-[6px] border border-transparent hover:border-white rounded-full cursor-pointer overflow-hidden duration-150": position !== select
            })}
        >
            <div
                className={clsx({
                    "flex flex-row items-center gap-2 bg-white rounded-full": position == select,
                    "flex flex-row items-center gap-2  rounded-full": position !== select
                })}
            >
                <div className="relative flex justify-center items-center">
                    <div
                        className={clsx({
                            "w-[40px] h-[40px] flex justify-center items-center bg-[#7dc642] rounded-full z-10": position == select,
                            "w-[40px] h-[40px] flex justify-center items-center border border-dashed  rounded-full z-10": position !== select
                        })}
                    >
                        <i class={`${icon} text-lg text-white`}></i>
                    </div>
                    <div className="absolute left-[-5px] w-[50px] h-[50px] flex justify-center items-center bg-[#3e3e3e] rounded-full">
                    </div>
                </div>
                <p
                    className={clsx({
                        "text-[#3e3e3e] font-bold text-lg ml-2": position == select,
                        "text-white font-bold text-lg ml-2": position !== select
                    })}
                >
                    {name}
                </p>
            </div>
        </div>
    );
}

export default AccountButton;