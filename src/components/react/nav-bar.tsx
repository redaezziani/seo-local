import LanguageSwitcher from './language-switcher';

function NavBar() {
  return (
    <div className="flex w-full z-50 fixed top-0 bg-zinc-950   justify-center items-start ">
      <header className=" w-full  py-2 px-4 flex justify-between  lg:max-w-[100rem] items-center">
        <a href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Seo 2x
        </a>
        <nav className="space-x-8 hidden md:block">
          <a href="/" className="text-gray-50 text-sm hover:text-blue-500 transition">
            Home
          </a>
          <a href="#services" className="text-gray-50 text-sm hover:text-blue-500 transition">
            Services
          </a>
          <a
            href="#pricing"
            className="text-gray-50 text-sm hover:text-blue-500 transition"
          >
            Pricing
          </a>
          <a href="/blog" className="text-gray-50 text-sm hover:text-blue-500 transition">
            Blog
          </a>
        </nav>
        <div className="flex gap-x-4 justify-center items-center">
          <LanguageSwitcher />
          <span className=" hidden  lg:flex">
            <button className=" rounded-lg bg-blue-500 text-white font-semibold text-sm   px-6 py-2.5">
              Get Started
            </button>
            <span className="rounded-lg bg-blue-500 flex justify-center items-center text-white font-semibold text-sm size-10 py-2.5">
              <svg
                className=" rotate-220"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5v.5m0 3v1.5m0 3v6" />
                <path d="M18 13l-6 6" />
                <path d="M6 13l6 6" />
              </svg>
            </span>
          </span>
          <button className=" rounded-lg size-10 md:hidden flex justify-center items-center bg-zinc-900 text-zinc-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
