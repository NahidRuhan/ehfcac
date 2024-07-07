import vision from "../../assets/vision.jpg";

const Vision = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="basis-1/2">
        <img className="w-4/5" src={vision} alt="" />
      </div>
      <div className="basis-1/2 space-y-5">
        <h1 className="text-4xl text-logoRed font-bold">Our Vision</h1>
        <p className="text-lg">
        Our vision is to be a global leader in cybersecurity education and research, fostering a safe and secure digital environment for all.
        </p>
      </div>
    </div>
  );
};

export default Vision;
