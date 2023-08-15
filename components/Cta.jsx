
const Cta = () => {
  return (
    <div>
      <section class="overflow-hidden bg-gray-50 mt-10 sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Shofi Media: The short film production company that can help you
              achieve your dreams
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Shofi Media is the short film production company that can help you
              achieve your dreams. With our team of experienced filmmakers and
              our wide range of services, we can take care of everything from
              scriptwriting to distribution. So if you have a short film idea
              that you're passionate about, let us help you bring it to life!
              Contact us today to learn more.
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="#tel:00989123456789"
                class="inline-block rounded bg-rose-500 px-12 py-3 text-sm md:text-lg font-medium text-black transition hover:bg-transparent  focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          className="w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
}

export default Cta
