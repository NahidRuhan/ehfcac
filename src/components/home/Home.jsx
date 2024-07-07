import Banner from "./Banner";
import Intro from "./Intro";
import Mission from "./Mission";
import Vision from "./Vision";

const Home = () => {
    
    return (
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-14">

            <Banner></Banner>
            <Intro></Intro>
            <Mission></Mission>
            <Vision></Vision>
            
        </div>
    );
};

export default Home;