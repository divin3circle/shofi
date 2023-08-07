import Image from "next/image";
import { test } from "./assets/AboutData";

const Testimonials = () => {
  return (
    <div id="services">
      <h1 className="md:text-4xl text-2xl text-center font-bold p-2 my-6">What Our Customers Say...</h1>
      <div>
        {test.map((item, index) => (
          <Image
            width="1440"
            height="600"
            key={index}
            src={item.img}
            alt={item.name}
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
