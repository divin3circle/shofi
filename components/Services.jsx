"use client"
import {GiFilmProjector} from 'react-icons/gi';
import { servicesData } from './assets/ServicesData';

const Services = () => {
  return (
    <div className='mb-14'>
      <div>
        <h1 className="md:text-4xl text-2xl text-center font-bold p-2 mb-4 mt-2">
          Our Services
        </h1>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3
       "
      >
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center sm:gap-2 md:gap-3 bg-rose-200 p-2 m-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-black hover:text-white cursor-pointer transition duration-300 ease-in-out"
          >
            <h1 className="text-xl font-semibold">{item.name}</h1>
            <GiFilmProjector />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 ">
        <a href="https://wa.link/8qz1gw" target="_blank" rel="noreferrer">
        <button className="border-2 border-black p-4 rounded-md text-xl font-bold hover:bg-black hover:text-white ease-in duration-150 hover:scale-95 ">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Services;
