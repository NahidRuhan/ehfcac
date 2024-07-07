import Banner from "../shared/Banner";
import ClientTestimonial from "./ClientTestimonial";
import ExpertServices from "./ExpertServices";
import ServiceInfo from "./ServiceInfo";

const Services = () => {
    return (
        <div>
            <Banner></Banner>
            <ExpertServices></ExpertServices>
            <ServiceInfo></ServiceInfo>
            <ClientTestimonial></ClientTestimonial>
        </div>
    );
};

export default Services;