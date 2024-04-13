import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import logo from '../../assets/logo.png'
import farmImg from '../../assets/farm.png'
import FarmBox from "./FarmBox";
import RecommentItem from "../../components/RecommentItem/RecommentItem";
import StyleRouterButton from "../../components/ButtonComponent/StyleRouterButton";
import FarmProduct from "./FarmProduct";
import '../../hiddenScroll.css'


const Farm = () => {

    const [preInfo, setPreInfo] = useState(false)
    const [preHeight, setPreHeigth] = useState(0)
    const [preFlex, setPreFlex] = useState("hidden")

    const divToScrollRef = useRef(null);

    useEffect(() => {
        setPreInfo(false)
        setPreHeigth(0)
    }, [])

    function showPreInfo() {

        const element = document.getElementById("FarmPreview");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id "${id}" not found.`);
        }

        if (!preInfo) setPreHeigth("[90vh]")
        else setPreHeigth(0)
        setPreInfo(!preInfo)
    }

    function openLink(url) {
        window.open(url, '_blank');
    }

    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-1/3 mb-5">
                    <Breadcrumb
                        location={"Trang trại"}
                    />
                </div>
                <div className="w-full">
                    <div className="w-full flex flex-col items-center">
                        <p className="text-4xl font-black text-center text-[#7dc642] mb-5">CÁC TRANG TRẠI LIÊN KẾT VỚI CHÚNG TÔI</p>
                        <p className="w-4/5 text-center text-lg">
                            <span className="block mb-5">
                                Nơi bạn tìm thấy thực phẩm <b> tươi ngon, an toàn</b> với<b>  nguồn gốc rõ ràng</b>. Chúng tôi tự hào kết nối nông trại uy tín đến bàn ăn của bạn, mang đến nguồn thực phẩm được canh tác theo phương pháp bền vững và an toàn sinh học. Lựa chọn Fudee, bạn sẽ nhận được sản phẩm chất lượng, giá cả hợp lý, dịch vụ chuyên nghiệp.
                            </span>
                            <div className="flex flex-row justify-center items-center gap-2" id="FarmPreview">
                                <div className="bg-[#3e3e3e] w-[100px] p-2 rounded-xl">
                                    <img
                                        src={logo}
                                    />
                                </div>
                                <p className="font-black text-xl text-[#7dc642]"> - Nâng tầm cuộc sống của bạn với thực phẩm an toàn cho gia đình!</p>
                            </div>
                        </p>
                    </div>
                    <div
                        className={`w-full h-${preHeight} bg-[#3e3e3e] mt-10 duration-200 ease-in rounded-xl grid grid-cols-2`}
                    >
                        {preInfo && (
                            <div className="w-full h-full p-5 flex flex-col gap-5">
                                <div className="w-full h-1/3 bg-white rounded-xl flex flex-row items-center justify-evenly">
                                    <div className="w-1/3 h-3/4 border border-[#3e3e3e] rounded-xl overflow-hidden">
                                        <img
                                            src={farmImg}
                                        />
                                    </div>
                                    <div className="w-1/2 h-3/4 flex flex-col  justify-between">
                                        <p className="font-bold text-xl">Công ty Thiên nhiên Việt</p>
                                        <div>
                                            <div className="w-full flex flex-row items-center gap-1">
                                                <i class="w-[20px] fa-solid fa-envelope text-base text-[#7dc642]"></i>
                                                <p className="text-base font-bold text-[#7dc642]">fudee.contact@gmail.com</p>
                                            </div>
                                            <div className="w-full flex flex-row items-center gap-1">
                                                <i class="w-[20px] fa-solid fa-phone text-base text-[#7dc642]"></i>
                                                <p className="text-base font-bold text-[#7dc642]">fudee.contact@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-2/3 bg-white rounded-xl p-3 flex flex-col items-end justify-between">
                                    <div>
                                        <p className="text-2xl font-bold mb-5">Giới thiệu về CPFOODS</p>
                                        <p className="indent-10">CP Food là nhãn hàng tiên phong trong ngành hàng thực phẩm của Công ty cổ phần chăn nuôi C.P. Việt Nam , nhằm giúp tăng độ phủ sóng của thương hiệu CP Food và phát triển tất cả các kênh bán hàng, giúp Khách Hàng có thể thực hiện hành vi mua hàng mọi lúc mọi nơi.</p>
                                        <p className="indent-10">Website Thương mại điện tử cpfoods.vn  là website Thương mại điện tử giới thiệu và bán các sản phẩm thương hiệu CP Food đến với người tiêu dùng thông qua hình thức trực tuyến. </p>
                                    </div>
                                    <div className="w-1/4 ">
                                        <StyleRouterButton
                                            px={4}
                                            py={3}
                                            width={"full"}
                                            responsive={"w-11/12 md:w-9/12 "}
                                            topColor={"green-500"}
                                            bottomColor={"[#3e3e3e]"}
                                            onClick={() => openLink("https://cpfoods.vn/pages/gioi-thieu-ve-cpfoods-vn")}
                                        >
                                            <p className="text-white text-sm font-medium">Xem thêm</p>
                                        </StyleRouterButton>
                                    </div>
                                </div>
                            </div>
                        )}
                        {preInfo && (
                            <div className="w-full h-full p-5 pl-0 overflow-hidden">
                                <div className="w-full h-full rounded-xl bg-white flex flex-col items-center ">
                                    <p className="text-2xl font-bold mb-5 mt-3">Các sản phẩm của CPFOODS</p>
                                    <div className="w-[95%] grid grid-cols-3 scrollable-div overflow-y-scroll gap-3 pr-3 pb-5">
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                        <FarmProduct />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-11/12 grid grid-cols-4 gap-5 mt-10">
                        <FarmBox
                            onclick={showPreInfo}
                            isShow={preInfo}
                        />
                        <FarmBox
                            onclick={showPreInfo}
                            isShow={preInfo}
                        />
                        <FarmBox
                            onclick={showPreInfo}
                            isShow={preInfo}
                        />
                        <FarmBox
                            onclick={showPreInfo}
                            isShow={preInfo}
                        />
                        <FarmBox
                            onclick={showPreInfo}
                            isShow={preInfo}
                        />
                        <FarmBox
                            onclick={showPreInfo}
                            isShow={preInfo}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mt-32 flex justify-center pr-1">
                <RecommentItem />
            </div>
        </div>
    );
}

export default Farm