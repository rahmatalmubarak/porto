import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              {/* <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              /> */}
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Sistem Informasi UMKM Daerah</p>
                <p className="text-gray-500 text-[10px]">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam labore doloremque numquam cum, harum et? Illo minima iste a corrupti doloribus blanditiis et. Commodi ad quos doloremque impedit nesciunt?
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              {/* <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="HireSide"
              /> */}
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Sistem Informasi UKM Kampus</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis et quasi quibusdam expedita, commodi aperiam obcaecati, labore ad accusamus in culpa adipisci explicabo animi, aliquid natus fugiat reprehenderit blanditiis. Exercitationem?
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              {/* <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="VergeSystems"
              /> */}
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Sistem Pengambilan Keputusan SAW
                </p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sapiente et aperiam cum, perspiciatis quasi inventore alias molestiae praesentium eos possimus dicta quas iste aspernatur quae non quaerat sit voluptates.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              {/* <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Payoasis"
              /> */}
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Sistem Pengambilan Keputusan AHP</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni quae, maiores, quibusdam labore pariatur culpa, nihil nostrum quidem non dolor vero exercitationem rem ullam unde laboriosam autem architecto dicta.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              {/* <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="VergeSystems"
              /> */}
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Scraping
                </p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sapiente et aperiam cum, perspiciatis quasi inventore alias molestiae praesentium eos possimus dicta quas iste aspernatur quae non quaerat sit voluptates.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              {/* <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Payoasis"
              /> */}
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Aplikasi POS</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni quae, maiores, quibusdam labore pariatur culpa, nihil nostrum quidem non dolor vero exercitationem rem ullam unde laboriosam autem architecto dicta.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
