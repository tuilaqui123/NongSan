import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Introduce = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5">
            <div className="w-11/12">
                <div className="w-1/3">
                    <Breadcrumb
                        location={"Giới thiệu"}
                    />
                </div>

            </div>
        </div>
    );
}

export default Introduce;