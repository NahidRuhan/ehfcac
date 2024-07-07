import mission from "../../assets/mission.webp";

const Mission = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="basis-1/2 space-y-5">
        <h1 className="text-4xl text-logoRed font-bold">Our Mission</h1>
        <p className="text-lg">
          Our mission is to lead in the prevention, detection, and response to
          cyber crimes through excellence in education, innovative research, and
          expert services. We aim to develop skilled professionals who can
          combat the evolving threats in the digital world.
        </p>
      </div>
      <div className="basis-1/2">
        <img className="w-1/2 mx-auto" src={mission} alt="" />
      </div>
    </div>
  );
};

export default Mission;
