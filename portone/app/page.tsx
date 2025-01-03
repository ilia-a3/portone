"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ExperiencePage from "./experience/page";
const items: { title: string; link: string }[] = [
  { title: "Programming", link: "/interests/programming" },
  { title: "Engineering", link: "/interests/engineering" },
  { title: "Web Dev", link: "/interests/web-dev" },
  { title: "Computing", link: "/interests/computing" },
  { title: "Something", link: "/interests/something" },
];
const details: { title: string; desc: string }[] = [
  {
    title: "Location",
    desc: "Castle Hill, Sydney",
  },
  {
    title: "Phone",
    desc: "+61 421 241 825",
  },
  {
    title: "E-Mail",
    desc: "cs.ia1387@gmail.com",
  },
  {
    title: "Education",
    desc: "Castle Hill High School - Year 10",
  },
];
export default function Home() {
  const [popup, setPopup] = useState(true);
  const closePopup = () => {
    setPopup(false);
  };
  return (
    <>
      {popup && (
        <div className="fixed w-100 h-100 bg-yellow-300 top-10 p-10 left-50% -translate-x-50">
          <p>
            Hi, this website is currently still being worked on and in
            development status. Just bear in mind some features may not work!
          </p>
          <button onClick={closePopup} className="mt-5 text-white p-5 bg-black">
            Close
          </button>
        </div>
      )}
      <section className="mt-10 bg-gr-front-two  min-[420]:h-[42rem] sm:h-[30rem]">
        <div className="flex md:flex-row w-100% md:max-w-[40rem] flex-col ml-auto mr-auto">
          <img
            src="/selfie.jpg"
            alt="me"
            className="hidden md:block mr-5 rounded-lg"
            width="200px"
          />
          <div className="p-10">
            <h1 className="text-5xl">Ilia A</h1>
            <p className="mt-6">
              I am a passionate worker with an various interests. I enjoy
              learning new technologies as much as I do developing them with
              creativity and my technical abilities with enough self motivation
              to achieve my goals.
              {/* I have worked making websites for small companies
            and offered internships for startups. Learning from online sites
            such as Udemy and over 3 years experiecne, I have learnt all the
            skills needed to develop the next full stack application. */}
            </p>
          </div>
        </div>
        <div className="mr-auto p-10 w-100% md:max-w-[60rem] flex flex-row justify-between flex-wrap ml-auto">
          {details.map((d) => (
            <div
              key={d.title}
              className="
              mb-10 bg-ayellowlighter p-4 rounded-md bg-opacity-20 max-w-52 shadow-md"
            >
              <h3 className="text-2xl">
                <b>{d.title}</b>
              </h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className=" h-front-first-h bg-gr-front-one order-1">
        <div>
          {/* <h2 className="text-center text-4xl">Explore Past Experiences</h2> */}
          <div className="ml-auto mr-auto block w-[50rem] max-w-[90%] ">
            <div className="w-[100%] h-[20rem] overflow-scroll">
              <div className="w-[50rem] max-w-[90%] h-[20rem] backdrop-mini opacity-70 absolute"></div>
              <ExperiencePage />
            </div>
            <Link href={"/experience"}>
              <button className="w-[100%] p-5 bg-abluedark text-ayellow text-xl">
                Explore Experiences
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="hidden w-0 h-0 lg:w-50% lg:h-front-first p-5 bg-red-900">
            {/* <img src="/background-front-1.svg" /> */}
            <div className="bg-black lg:w-100% lg:h-100%"></div>
          </div>
          <div className="w-100% ml-auto mr-auto lg:w-50% h-auto sm:pr-5 max-w-[55rem]">
            <div className="p-10 text-left">
              <h2 className="text-5xl mb-2">
                Fields of
                <span className="underlinemaybe text-abluelighttext ml-5 pl-2 pr-2 cool-gradient">
                  interest
                </span>
              </h2>
              <p className="mt-10">Click on each to learn more!👇</p>
            </div>
            <ul className="text-right w-100% font-jb" dir="rtl">
              {items.map((item) => (
                <Link key={item.title} href={item.link}>
                  <button className="flex flex-row m-5 w-90% sm:m-10 pr-4 p-10 sm:pr-10 bg-gray-300 bg-opacity-50 sm:w-110 YES  border-neutral-400 border-2 text-neutral-600 hover:text-white hover:shadow-[inset_-36rem_0_0_0] hover:shadow-ayellowlighter duration-[400ms,700ms] transition-[color,box-shadow]">
                    <span className="max-first">
                      <img
                        src="/bulletin1.svg"
                        alt="bulletin for list"
                        width="50"
                        className="fill-yellow-400"
                      />
                    </span>
                    <span className="text-4xl mr-5">{item.title}</span>
                  </button>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
