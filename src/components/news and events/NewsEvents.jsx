import Banner from "../shared/Banner";
import News from "./News";

const NewsEvents = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
        <News></News>
      </div>
    </div>
  );
};

export default NewsEvents;
