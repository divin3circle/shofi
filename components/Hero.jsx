import { AiFillVideoCamera } from "react-icons/ai";


const Hero = ({heading, message}) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/**overlay */}
      <div className="absolute inset-0 bg-black/70 z-[2]" />
      {/**content */}
      <div className="p-5 text-white z-[2] md:ml-[-10rem] mt-[-10rem]">
        <div className="flex flex-row text-white gap-2">
          <AiFillVideoCamera size={50} className="" />
          <h2 className="text-5xl font-bold">{heading}</h2>
        </div>
        <p className="text-2xl font-semibold py-5">{message}</p>
        <button className="p-4 border-2 rounded-md font-semibold text-xl hover:bg-white hover:text-black duration-150 ease-in hover:scale-95">
          Reserve Consultation
        </button>
      </div>
    </div>
  );
}

export default Hero
