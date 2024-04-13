import React from "react";
import blog from '../../assets/blog.jpg'

const MediumBlog = () => {
    return (
        <div className="w-full flex flex-row gap-3 cursor-pointer p-3 hover:shadow-2xl rounded-xl duration-200 border border-transparent hover:border-gray-200">
            <div className="relative w-2/5 overflow-hidden rounded-xl group flex justify-center items-center">
                <div className="absolute w-full h-full rounded-xl duration-300 scale-105 group-hover:scale-90 border-2 border-white z-10"></div>
                <img
                    src={blog}
                    className="w-full group-hover:scale-110 duration-300 group-hover:brightness-[95%]"
                />
            </div>

            <div className="w-3/5">
                <p className="text-base font-bold mb-1">MẬT ONG NUÔI CÓ ĐƯỢC GỌI LÀ MẬT NGUYÊN CHẤT KHÔNG?</p>
                <div className=" flex items-center italic text-sm mb-2">
                    <i class="fa-solid fa-calendar-days mr-1"></i>
                    <p>11/12/2023</p>
                    <p className="mx-2">|</p>
                    <p className="hover:text-[#7dc642] cursor-pointer">Phạm Ngọc Qúi</p>
                </div>
                <p className="text-sm">Mật ong là một nguyên liệu được sử dụng phổ biến trong nấu ăn. Ngoài ra, mật ong còn được ứng dụng trong chữa bệnh và làm đẹp...</p>
            </div>
        </div>
    );
}

export default MediumBlog;