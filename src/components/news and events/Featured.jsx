
import { SlCalender } from "react-icons/sl";

const Featured = () => {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[750px] xl:h-[650px] ">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">Cybersecurity Conference 2024</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-12-17</p>
          <p className="font-normal text-base font-nunito">A three-day conference featuring keynote speakers, panel discussions, and hands-on workshops.</p>
        </div>
      </div>

      <div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[750px] xl:h-[650px] ">
        <div className="flex flex-col gap-2">
          <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
          <h2 className="font-bold text-2xl font-roboto text-logoRed">Ethical Hacking Bootcamp</h2>
          <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
          <p className="font-normal text-base font-nunito">An intensive bootcamp covering the latest techniques in ethical hacking. </p>
        </div>
      </div>

    </div>
    );
};

export default Featured;