
const Banner = () => {
    return (
            <div className="banner flex flex-col gap-5 justify-center items-center rounded-3xl">
                <h1 className="text-5xl  text-center">Welcome to EHFCAC</h1>
                <p className=" text-center">- Canadian University of Bangladesh</p>
                <div className='flex gap-4 justify-center'>
            <button className='btn bg-[#a2beb3] text-black rounded-full border-none outline-none w-[176px]'>Explore Now</button>
          </div>

            </div>
    );
};

export default Banner;