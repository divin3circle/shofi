import { AiFillVideoCamera } from "react-icons/ai";

const HeroAbout = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/**overlay */}
      <div className="absolute inset-0 bg-black/70 z-[2]" />
      {/**content */}
      <div className="p-5 text-white z-[2] md:ml-[rem] mt-[5rem] max-w-[75%]">
        <div className="flex flex-row text-white gap-2">
          <AiFillVideoCamera size={50} className="sm:hidden md:block" />
          <h2 className="md:text-5xl text-2xl font-bold">{heading}</h2>
        </div>
        <p className="md:text-2xl  leading-10 md:font-medium py-5">{message}</p>
        <a href="tel:0710474988">
          <button className="p-4 border-2 rounded-md font-semibold text-xl hover:bg-white hover:text-black duration-150 ease-in hover:scale-95">
            Hire Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroAbout;
