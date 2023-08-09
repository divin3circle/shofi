"use client";
import Image from "next/image";
import { test } from "./assets/AboutData";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight, AiFillFacebook, AiFillInstagram, AiFillWechat, AiFillYoutube } from "react-icons/ai";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = test.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(test) || test.length <= 0) {
    return null;
  }
  return (
    <div id="services" className="mx-auto ">
      <h1 className="md:text-4xl text-2xl text-center font-bold p-2 my-6">
        What Our Customers Say...
      </h1>
      <div>
        {test.map((item, index) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-100 duration-1000 ease-in"
                : "opacity-0 duration-1000 ease-out"
            }
          >
            <div className="flex relative max-w-640 justify-center p-4">
              <AiFillCaretLeft
              onClick={prevSlide}
                size={50}
                className="absolute top-[30%] md:top-[45%] md:text-black left-0 cursor-pointer select-none z-[2] hover:scale-95 ease-in duration-150"
              />
              {index === current && (
                <div className="shadow-xl bg-rose-100 p-2 md:pr-4 rounded-lg flex gap-2 flex-col md:flex-row lg:gap-4   ">
                  <Image
                    width="640"
                    height="300"
                    src={item.img}
                    alt={item.name}
                    objectFit="contain"
                    className="h-[500px] rounded object-cover"
                  />
                  <div>
                    <h1 className="font-semibold text-2xl p-2 ">{item.name}</h1>
                    <h2 className="text-xl p-2">{item.company}</h2>
                    <p className="text-lg leading-10 font-semibold">{item.mess}</p>
                    <div className="flex mt-4 md:mt-8 justify-center gap-4">
                        <AiFillFacebook size={30} className="hover:scale-105 duration-150 ease-in" />
                        <AiFillYoutube size={30} className="hover:scale-105 duration-150 ease-in"/>
                        <AiFillInstagram size={30} className="hover:scale-105 duration-150 ease-in" />
                        <AiFillWechat size={30} className="hover:scale-105 duration-150 ease-in" />
                    </div>
                  </div>
                </div>
              )}
              <AiFillCaretRight
              onClick={nextSlide}
                size={50}
                className="absolute top-[30%] md:top-[45%] right-0 md:text-black cursor-pointer select-none z-[2] hover:scale-95 ease-in duration-150"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
