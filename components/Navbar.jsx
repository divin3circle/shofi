"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FcFilmReel } from "react-icons/fc";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
      setMenu(!menu);
    };

    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    useEffect(() => {
        const changeColor = () =>{
            if(window.scrollY >= 90){
                setColor("white")
                setTextColor("#CD7687");
            }else{
                setColor("transparent")
                setTextColor("white")
            }
        }
        window.addEventListener("scroll", changeColor);
    }, []);



  return (
    <div
      style={{ backgroundColor: color }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-500 text-white"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: textColor }} className="font-bold text-5xl flex">
            Shofi.
            <FcFilmReel size={44} />
          </h1>
        </Link>
        <ul style={{ color: textColor }} className="sm:flex hidden text-2xl">
          <li className="p-4 hover:border-b-4 m-2 rounded hover:border-teal-500 duration-150 ease-in ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:border-b-4 m-2 rounded hover:border-teal-500 duration-150 ease-in ">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4  hover:border-b-4 m-2 rounded hover:border-teal-500 duration-150 ease-in ">
            <Link href="/#services">Testimonials</Link>
          </li>
          <li className="p-4 hover:border-b-4 m-2 rounded hover:border-teal-500 duration-150 ease-in ">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        <div
          onClick={toggleMenu}
          className="block sm:hidden px-4 text-white z-[100]"
        >
          {/**mobile */}
          {menu ? (
            <AiOutlineClose style={{ color: textColor }} size={36} />
          ) : (
            <AiOutlineMenu style={{ color: textColor }} size={36} />
          )}
        </div>
        <div
          className={
            menu
              ? "sm:hidden fixed inset-0 flex justify-center items-center w-full h-screen bg-black bg-opacity-10 backdrop-blur-md text-center ease-in duration-300"
              : "sm:hidden fixed left-[-100%] inset-0 flex justify-center items-center w-full h-screen bg-black bg-opacity-10 backdrop-blur-md text-center ease-in duration-300"
          }
        >
          <ul style={{ color: textColor }} className="font-semibold">
            <li
              onClick={toggleMenu}
              className="text-4xl p-4 hover:text-teal-500 ease-in-out duration-300 hover:scale-105"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={toggleMenu}
              className="text-4xl p-4 hover:text-teal-500 ease-in-out duration-300 hover:scale-105"
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              onClick={toggleMenu}
              className="text-4xl p-4 hover:text-teal-500 ease-in-out duration-300 hover:scale-105"
            >
              <Link href="/#services">Testimonials</Link>
            </li>
            <li
              onClick={toggleMenu}
              className="text-4xl p-4 hover:text-teal-500 ease-in-out duration-300 hover:scale-105"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
