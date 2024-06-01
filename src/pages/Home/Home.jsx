import BannerReverse from "../../components/Banner/BannerReverse";
import Category from "../../components/Category/Category";
import CategoryDisplay from "../../components/CategoryDisplay/CategoryDisplay";
import RegisterRecomment from "../../components/RegisterRecomment/RegisterRecomment";
import News from "../../components/News/News";
import HotDeal from "../../components/HotDeal/HotDeal";
import FarmContent from "../../components/FarmContent/FarmContent";

const Home = () => {
    return (
        <div>
            <BannerReverse />
            <HotDeal />
            <Category />
            <CategoryDisplay
                mainColor={"red-500"}
                themeColor={"green-100"}
                itemColor={"red-800"}
                title={"Thịt tươi"}
            />
            <CategoryDisplay
                mainColor={"blue-500"}
                themeColor={"white"}
                itemColor={"blue-800"}
                title={"Hải sản"}
            />
            <CategoryDisplay
                mainColor={"green-500"}
                themeColor={"green-100"}
                itemColor={"green-800"}
                title={"Rau củ"}
            />
            <CategoryDisplay
                mainColor={"orange-500"}
                themeColor={"white"}
                itemColor={"orange-800"}
                title={"Trái cây"}
            />
            <CategoryDisplay
                mainColor={"slate-500"}
                themeColor={"green-100"}
                itemColor={"gray-800"}
                title={"Gói nguyên liệu"}
            />
            <FarmContent />
            <RegisterRecomment />
            <News />
        </div>
    );
}

export default Home;    