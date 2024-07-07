
import { SlCalender } from "react-icons/sl";

const Latest = () => {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[750px] xl:h-[650px] ">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">Upcoming Webinar on AI in Cybersecurity</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-12-17</p>
          <p className="font-normal text-base font-nunito">Join us for an insightful webinar on the role of AI in enhancing cybersecurity measures.</p>
        </div>
      </div>

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[750px] xl:h-[650px] ">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">New Research Publication on Blockchain Security</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">Our latest research on blockchain security has been published in the Journal of Cybersecurity.</p>
        </div>
      </div>

      

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[700px] xl:h-[650px]">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">Collaboration with Local Law Enforcement Agencies</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">EHFCAC partners with local law enforcement to provide training on cybercrime investigation techniques.</p>
        </div>
      </div>


    </div>
    );
};

export default Latest;