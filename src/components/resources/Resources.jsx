import Banner from "../shared/Banner";
import Faq from "./Faq";
import KnowledgeBase from "./KnowledgeBase";
import Toolkits from "./Toolkits";

export default function Resources() {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
      <KnowledgeBase></KnowledgeBase>
      <Toolkits></Toolkits>
      <Faq></Faq>  
      </div>
      
    </div>
  )
}
