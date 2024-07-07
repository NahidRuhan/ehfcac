
const ResearchTeam = () => {
    return (
        <div className="">
        <h1 className="text-center text-3xl md:text-5xl font-bold my-10 text-logoRed">Meet our Research Team</h1>
        <p className="text-center">Meet our dedicated team of researchers and scholars who are at the forefront of cybersecurity research.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
          {/* Founder */}
          <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3 col-span-1 lg:col-span-3 justify-self-center">
            <img className="object-cover w-full h-full" src="https://i.ibb.co/0GS38PS/image.png" alt="image" />
            <div className="pt-2">
              <hr className="p-2"></hr>
              <h1 className="text-center text-xl font-bold px-5 text-black">
                Lead Researcher
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
                Research Associate
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
                Research Associate
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
                Research Associate
              </h1>
              <h5 className="text-center text-lg px-5 text-black">
                Jane Doe
              </h5>
            </div>
          </div>
      
        </div>
      </div>
    );
};

export default ResearchTeam;