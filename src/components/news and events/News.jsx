import { useState } from "react";
import Latest from "./Latest";
import Featured from "./Featured";
import Events from "./Events";

const News = () => {

    const [latest,setLatest] = useState(true);
    const [featured,setFeatured] = useState(false);
    const [events,setEvents] = useState(false);

    return (
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
            <h1 className="text-center text-logoRed font-normal text-3xl md:text-5xl py-10">News And Events</h1>
            <div className="flex gap-5 justify-center pb-5">
            <div><button onClick={()=>{
            setLatest(true);
            setFeatured(false);
            setEvents(false);
            }} className={latest ? `bg-red-500 text-black font-bold py-2 px-4 rounded`: `bg-slate-200 text-black font-bold py-2 px-4 rounded`}>Latest News</button></div>
            <div><button onClick={()=>{
                setFeatured(true);
                setLatest(false);
                setEvents(false);
            }} className={featured ? `bg-red-500 text-black font-bold py-2 px-4 rounded`: `bg-slate-200 text-black font-bold py-2 px-4 rounded`}>Upcoming Events</button></div>
            <div><button onClick={()=>{
                setEvents(true);
                setLatest(false);
                setFeatured(false);
            }} className={events ? `bg-red-500 text-black font-bold py-2 px-4 rounded`: `bg-slate-200 text-black font-bold py-2 px-4 rounded`}>Event Archives</button></div>
            {/* <div><button className="btn btn-primary bg-white text-black">Events</button></div>
            <div><button className="btn btn-primary bg-white text-black">In Medea</button></div> */}
            </div>

            {latest && <Latest></Latest>}
            {featured && <Featured></Featured>}
            {events && <Events></Events>}
        </div>
    );
};

export default News;