import Banner from "../shared/Banner";
import ResearchAreas from "./ResearchAreas";
import ResearchInfo from "./ResearchInfo";
import ResearchTeam from "./ResearchTeam";

const Research = () => {
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <ResearchAreas></ResearchAreas>
            <ResearchTeam></ResearchTeam>
            <ResearchInfo></ResearchInfo>
        </div>
    );
};

export default Research;