import { SlCalender } from "react-icons/sl";

const FeaturedNews = () => {
    return (
        <div className="space-y-5">

            <h1 className="text-4xl text-logoRed font-bold text-center">Featured News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[600px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Upcoming Webinar on AI in Cybersecurity</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam error consectetur accusamus minus suscipit. Reiciendis nihil fugiat magnam. Vel, quo!</p>
  </div>
</div>



<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[600px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">New Research Publication on Blockchain Security</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae et quod cumque ipsam quis consequatur accusantium provident culpa odio.</p>
  </div>
</div>


<div className="p-5 bg-slate-100 shadow-xl relative overflow-hidden h-[600px]">
  <div className="flex flex-col gap-2">
    <img className="w-full h-72" src="https://i.ibb.co/CV3sfRB/blank.jpg" alt="" />
    <h2 className="font-bold text-2xl font-roboto text-logoRed">Collaboration with Local Law Enforcement Agencies</h2>
    <p className="text-sm flex items-center gap-2"><span><SlCalender /></span>2023-11-26</p>
    <p className="font-normal text-base font-nunito text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem veritatis, facilis quia at mollitia qui commodi aperiam consectetur reprehenderit quo.</p>
  </div>
</div>


</div>
            

        </div>
    );
};

export default FeaturedNews;