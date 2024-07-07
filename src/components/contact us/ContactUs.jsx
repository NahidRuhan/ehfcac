import Banner from "../shared/Banner";
import Contact from "./Contact";

const ContactUs = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
            <Contact></Contact>
            </div>
        </div>
    );
};

export default ContactUs;