import Banner from "../shared/Banner";
import ResearchAreas from "./ResearchAreas";
import ResearchInfo from "./ResearchInfo";
import ResearchTeam from "./ResearchTeam";

const Research = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
            <ResearchAreas></ResearchAreas>
            <ResearchTeam></ResearchTeam>
            <ResearchInfo></ResearchInfo>
            </div>
            
        </div>
    );
};

export default Research;