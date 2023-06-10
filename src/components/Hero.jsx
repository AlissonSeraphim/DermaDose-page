import heroLogo from "../img/hero_logo-removebg.png";
import logo from "../img/logo-removebg.png";

function Hero() {
  return (
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12 bg-gradient-to-b from-sky-50 to-sky-400">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
          <a
            href="/"
            class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
            aria-label="logo"
          >
            <img src={logo} alt="logo" class="h-auto w-16 text-indigo-500" />
            DermoDose
          </a>

          <nav class="hidden gap-12 lg:flex">
            <a href="#home" class="text-lg font-semibold text-gray-600 hover:text-indigo-500">
              Home
            </a>
            <a
              href="#problem"
              class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Problem
            </a>
            <a
              href="#solution"
              class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Solution
            </a>
            <a
              href="#aboutUs"
              class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About Us
            </a>
          </nav>
        </header>

        <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row ">
          <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Estamos orgulhosos de apresentar a
            </p>

            <h1 class="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
              Revolução no Tratamento da Diabetes com Nano Agulhas
            </h1>

            <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Visando a liderança em tratamentos inovadores contra a diabetes,
              revolucionando com nanoagulhas e parcerias estratégicas em São
              Paulo.
            </p>
          </div>

          <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <img
              src={heroLogo}
              loading="lazy"
              alt="hero Logo"
              class="h-full w-full object-contain lg:object-cover lg:object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
