import { AiFillVideoCamera } from "react-icons/ai";


const Hero = ({heading, message, about}) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/**overlay */}
      <div className="absolute inset-0 bg-black/70 z-[2]" />
      {/**content */}
      <div className="p-5 text-white z-[2] md:ml-[-10rem] mt-[-10rem]">
        <div className="flex flex-row text-white gap-2">
          <AiFillVideoCamera size={50} className="text-rose-500" />
          <h2 className="text-5xl font-bold text-rose-500">{heading}</h2>
        </div>
        <p className="text-2xl font-normal py-5">{message}</p>
        <a href="tel:0710474988">
          <button className="p-4 border-2 border-rose-500 rounded-md font-semibold text-xl hover:bg-rose-500 hover:text-black duration-150 ease-in hover:scale-95">
            Reserve Consultation
          </button>
        </a>
        <a href="/about" className="block md:inline mt-5 md:mx-2 md:mt-0">
          <button className="p-4 border-2 border-rose-500 rounded-md font-semibold text-xl hover:bg-rose-500 hover:text-black duration-150 ease-in hover:scale-95">
            {about}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero
