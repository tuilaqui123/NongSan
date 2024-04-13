import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BigBlog from "./BigBlog";
import MediumBlog from "./MediumBlog";
import logo from '../../assets/logo.png'

const Blog = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-1/3 mb-5">
                    <Breadcrumb
                        location={"Blog"}
                    />
                </div>
                <div>
                    <p className="text-5xl font-bold mb-5 text-[#7dc642]">Tin tức nổi bật</p>
                    <div className="w-full grid grid-cols-2 gap-5">
                        <BigBlog />
                        <div className="flex flex-col gap-1">
                            <MediumBlog />
                            <MediumBlog />
                            <MediumBlog />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`h-10 w-full my-16 bg-[#3e3e3e] bg-[url(${logo})] bg-repeat-space bg-contain`}></div>

            <div className="w-11/12">
                <p className="text-4xl font-bold mb-5 text-[#7dc642]">Bài viết mới nhất</p>
                <div className="w-full grid grid-cols-3 gap-5">
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                </div>
            </div>
        </div>
    );
}

export default Blog;