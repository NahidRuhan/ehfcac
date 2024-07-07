import Banner from "../shared/Banner";
import ClientTestimonial from "./ClientTestimonial";
import ExpertServices from "./ExpertServices";
import ServiceInfo from "./ServiceInfo";

const Services = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
           <ExpertServices></ExpertServices>
            <ServiceInfo></ServiceInfo>
            <ClientTestimonial></ClientTestimonial>     
            </div>
            
        </div>
    );
};

export default Services;