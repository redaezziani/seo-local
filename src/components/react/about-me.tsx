import React from "react";

const AboutMe = () => {
  return (
    <section className="border-y grid grid-cols-1 md:grid-cols-4 px-4 md:px-20 border-border min-h-96 w-full mt-20">
      <span className="border-x borderborder overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/118160573?v=4"
          alt="Reda Ezziani"
          className="w-full h-full grayscale-100 hover:grayscale-0 object-cover  transition-transform duration-300"
        />
      </span>

      <div className="md:col-span-2 p-6 flex flex-col gap-2 justify-end">
        <h2 className="text-3xl font-bold text-neutral-700 ">About Me</h2>
        <p className=" text-neutral-500 ">
          Hello! I'm Reda Ezziani, a passionate web developer with a knack for
          creating dynamic and user-friendly web applications. With a strong
          foundation in both front-end and back-end technologies, I enjoy
          bringing ideas to life through code.
        </p>
      </div>
      <div className="   border-x grid grid-rows-3 grid-cols-1 border-border ">
        <span className=" border-b overflow-hidden border-border w-full grid grid-cols-3">
          <div className="flex col-span-2 flex-col gap-2 px-2 py-2">
            <h3 className="text-sm font-semibold font-pexel text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-red-500 ">
              E-Commerce Systems Manager
            </h3>
            <p className=" text-neutral-500 text-xs ">
              Managed and optimized e-commerce platforms, enhancing user
              experience and boosting sales through strategic updates and
              maintenance.
            </p>
            <a
              href="https://www.linkedin.com/in/reda-ezziani-4b0a3523b/"
              className="text-xs flex gap-1  underline"
            >
              github repo{" "}
              <svg
                fill="none"
                className="size-4 rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {" "}
                <path
                  d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z"
                  fill="currentColor"
                />{" "}
              </svg>
            </a>
          </div>
          <img
            src="https://cdn.dribbble.com/userupload/7325823/file/original-21286e81a7d84203ea0d4e65472f5104.png?resize=1024x768&vertical=center"
            className="w-full bg-secondary h-full object-cover"
          />
        </span>
        <span className=" border-b overflow-hidden border-border w-full grid grid-cols-3">
          <div className="flex col-span-2 flex-col gap-2 px-2 py-2">
            <h3 className="text-sm font-semibold font-pexel text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-red-500 ">
              Web Development Intern
            </h3>
            <p className=" text-neutral-500 text-xs ">
              Assisted in the development and maintenance of web applications,
              gaining hands-on experience with modern web technologies and best
              practices.
            </p>
            <a
              href="https://www.linkedin.com/in/reda-ezziani-4b0a3523b/"
              className="text-xs flex gap-1  underline"
            >
              github repo{" "}
              <svg
                fill="none"
                className="size-4 rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {" "}
                <path
                  d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z"
                  fill="currentColor"
                />{" "}
              </svg>
            </a>
          </div>
          <img
            src="https://cdn.dribbble.com/userupload/11360494/file/original-4b7052ccd67fee85eae1adc80ef3ad63.png?resize=1024x768&vertical=center"
            className="w-full bg-secondary h-full object-cover"
          />
        </span>

        <span className="  overflow-hidden  w-full grid grid-cols-3">
          <div className="flex col-span-2 flex-col gap-2 px-2 py-2">
            <h3 className="text-sm font-semibold font-pexel text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-red-500 ">
              IT Support Specialist
            </h3>
            <p className=" text-neutral-500 text-xs ">
              Provided technical support and troubleshooting for hardware and
              software issues, ensuring smooth operation of IT systems and
              enhancing user satisfaction.
            </p>
            <a
              href="https://www.linkedin.com/in/reda-ezziani-4b0a3523b/"
              className="text-xs flex gap-1  underline"
            >
              github repo{" "}
              <svg
                fill="none"
                className="size-4 rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {" "}
                <path
                  d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z"
                  fill="currentColor"
                />{" "}
              </svg>
            </a>
          </div>
          <img
            src="https://cdn.dribbble.com/userupload/13554308/file/original-bb88cce29a33316a7f437e9c1b02fbac.png?resize=1024x768&vertical=center"
            className="w-full bg-secondary h-full object-cover"
          />
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
