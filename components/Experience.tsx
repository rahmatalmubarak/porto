import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold"> Software Engineer</span>
          </p>
          <p className="text-gray-300">February 2021 - PRESENT, HYDERABAD</p>
        </div>
        <p className="text-gray-300 pt-5">
          Welcome to my web developer portfolio! Im Rahmat Almubarak, a passionate and skilled web developer with 2 years of experience in creating dynamic and user-friendly websites and web applications. With a strong background in back-end development, I specialize in crafting elegant and responsive solutions that meet the unique needs of my clients.
          <br />
          <br />
          Browse through my portfolio to discover the innovative solutions Ive created for clients across various industries. If youre interested in working together or have any questions, feel free to get in touch. I look forward to collaborating with you to turn your ideas into reality and achieve your online goals!
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Laravel
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
