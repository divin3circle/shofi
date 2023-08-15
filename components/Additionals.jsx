

const Additionals = () => {
  return (
    <>
      {" "}
      <h2 className="text-4xl text-center font-bold sm:text-4xl">
        Additional Services
      </h2>
      <div className="grid mt-4 sm:grid-cols-1 md:grid-cols-3 gap-4 max-w-[75%] content-center mx-auto">
        <article className="group   rounded-xl shadow-lg hover:scale-105 ease-in duration-150 cursor-pointer">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-semibold text-gray-900">
                Event Management
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed md:text-lg">
              No event is too large or too small for Shofi Media. We're one of
              the leading event management companies in Papua New Guniea.
            </p>
          </div>
        </article>
        <article className="group  rounded-xl shadow-lg hover:scale-105 ease-in duration-150 cursor-pointer">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-semibold text-gray-900">
                Production
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed md:text-lg">
              Our production unit has earned a reputation of producing beyond
              ordinary products. All products are tailored to perfectly meet our
              client's needs.
            </p>
          </div>
        </article>
        <article className="group rounded-xl shadow-lg hover:scale-105 ease-in duration-150 cursor-pointer">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1639847960715-f0644ed01ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=716&q=80"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-semibold text-gray-900">
                Still Photography
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed md:text-lg text-black">
              In all cases where professional photographic skills are warranted,
              Shofi Media utilizes the best photographers with dozens of years
              in experience. Our work is innovative, modern, and of the highest
              standard.
            </p>
          </div>
        </article>
      </div>
      <div className="flex justify-center mt-4 mb-10 items-center">
        <a href="https://wa.link/8qz1gw" target="_blank" rel="noreferrer">
          <button className="border-2 border-rose-500 p-4 rounded-md text-xl font-bold hover:bg-rose-500 hover:text-white ease-in duration-150 hover:scale-95 ">
            Learn More
          </button>
        </a>
      </div>
    </>
  );
};

export default Additionals;
