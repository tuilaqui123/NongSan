import React from "react";
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
                mainColor={"green-500"}
                themeColor={"green-100"}
                itemColor={"green-800"}
                title={"Rau củ"}
            />
            <FarmContent />
            <RegisterRecomment />
            <News />
        </div>
    );
}

export default Home;    