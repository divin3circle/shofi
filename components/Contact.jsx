"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const notify = () => toast("Your response was submitted");
  
  const onSubmit =() => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  
  return (
    <div id="contact">
      <section className="bg-white mt-4">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Ready to experience an extraordinary filming experience?
          </p>
          <form onSubmit={onSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm md:text-lg font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 md:text-lg"
                placeholder="Let us know the service you require"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 md:text-lg"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 md:text-lg"
                placeholder="Contact Us..."
                defaultValue={""}
              />
            </div>
            <button
            onClick={notify}
              type="submit"
              className="py-3 px-5 text-sm text-center text-black md:text-lg rounded-lg bg-primary-700 sm:w-fit hover:bg-black hover:text-white ease-in duration-100 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 border-2 border-black font-semibold"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
