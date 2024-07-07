import Banner from "./Banner";
import FeaturedNews from "./FeaturedNews";
import Intro from "./Intro";
import Mission from "./Mission";
import Vision from "./Vision";

const Home = () => {
    
    return (
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">

            <Banner></Banner>
            <Intro></Intro>
            <Mission></Mission>
            <Vision></Vision>
            <FeaturedNews></FeaturedNews>
            
        </div>
    );
};

export default Home;