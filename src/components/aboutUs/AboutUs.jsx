import Mission from "../home/Mission";
import Vision from "../home/Vision";
import { GiGraduateCap } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Banner from "../shared/Banner";

const AboutUs = () => {
  return (
    <div>

        <Banner></Banner>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-24">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl text-logoRed font-bold">
            About Ethical Hacking and Forensic Cyber Crime Analysis Center
            (EHFCAC)
          </h1>
          <p className="text-lg text-justify">
            The Ethical Hacking and Forensic Cyber Crime Analysis Center
            (EHFCAC) is a premier initiative by the Canadian University of
            Bangladesh. Our center brings together a team of experts in
            cybersecurity, ethical hacking, and forensic analysis to provide
            comprehensive education, cutting-edge research, and specialized
            services.
          </p>
        </div>
        <Mission></Mission>
        <Vision></Vision>

        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl text-logoRed font-bold text-center">
            Our Objective
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-5">
            <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
              <p className="font-bold text-xl py-5 flex items-center gap-3">
                <span className="text-3xl md:text-5xl">
                  <GiGraduateCap></GiGraduateCap>
                </span>
                Educational Excellence
              </p>
              <p className="text-base">
                To provide world-class education in ethical hacking and cyber
                forensic analysis.
              </p>
            </div>

            <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
              <p className="font-bold text-xl py-5 flex items-center gap-3">
                <span className="text-3xl md:text-5xl">
                  <GiArchiveResearch></GiArchiveResearch>
                </span>
                Innovative Research
              </p>{" "}
              <p className="text-base">
                To conduct innovative research addressing the latest challenges
                in cybersecurity.
              </p>
            </div>

            <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
              <p className="font-bold text-xl py-5 flex items-center gap-3">
                <span className="text-3xl md:text-5xl">
                  <MdHomeRepairService></MdHomeRepairService>
                </span>
                Expert Services
              </p>{" "}
              <p className="text-base">
                To offer expert services and solutions to combat cyber threats.
              </p>
            </div>

            <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
              <p className="font-bold text-xl py-5 flex items-center gap-5"><span className="text-3xl md:text-5xl"><FaPeopleGroup /></span>Collaboration</p>
              <p className="text-base">
                To collaborate with industry, government, and academia to
                enhance cybersecurity practices.
              </p>
            </div>
          </div>
        </div>

        <div className="">
  <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Meet our Team</h1>
  <p className="text-center">Meet our distinguished team of professionals, educators, and researchers dedicated to cybersecurity excellence.</p>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
    {/* Founder */}
    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3 col-span-1 lg:col-span-3 justify-self-center">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Director
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>

    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Senior Researcher
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>

    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Senior Researcher
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>

    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Senior Researcher
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>

    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Advisor
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>
    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Advisor
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>
    <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
      <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
      <div className="pt-2">
        <hr className="p-2"></hr>
        <h1 className="text-center text-xl font-bold px-5 text-black">
          Advisor
        </h1>
        <h5 className="text-center text-lg px-5 text-black">
          Jane Doe
        </h5>
      </div>
    </div>
  </div>
</div>

<div>
<div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="basis-1/2 space-y-5">
        <h1 className="text-3xl md:text-5xl text-logoRed font-bold">Our Facilities</h1>
        <p className="text-lg text-justify">
        Our state-of-the-art facilities include advanced laboratories, secure data centers, and modern classrooms designed to provide hands-on learning and research opportunities.
        </p>
      </div>
      <div className="basis-1/2">
        <img className="w-1/2 mx-auto" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
      </div>
    </div>
</div>

      </div>
    </div>
  );
};

export default AboutUs;
