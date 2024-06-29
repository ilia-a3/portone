"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

let items: [
  { name: string; uri: string },
  { name: string; uri: string },
  { name: string; uri: string },
  { name: string; uri: string }
] = [
  {
    name: "Home",
    uri: "/",
  },
  {
    name: "About Me",
    uri: "/about",
  },
  {
    name: "Accomplishments",
    uri: "/accomplishments",
  },
  {
    name: "Experience",
    uri: "/experience",
  },
];
export default function Navbar() {
  const [nav, setNav] = useState(false);
  let toggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setNav(window.innerWidth > 768 ? true : false);
  }, []);

  return (
    <div id="navbar" className="w-screen p-5 bg-abluelight order-last sticky">
      <ul
        className={`flex-col ${
          nav ? "h-110" : "h-auto"
        } sticky md:h-auto flex flex-wrap justify-evenly align-middle pr-12 pl-12 md:pr-16 md:pl-16 md:flex-row md:justify-around transition-all duration-100`}
      >
        <button
          onClick={toggle}
          className="md:hidden w-fit mr-auto ml-auto bg-ayellowdark text-abluedark p-2 rounded-md hover:-translate-y-2 transition-all duration-200 active:translate-y-4"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18H10"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L16 12"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        {nav && (
          <>
            {items.map((item) => (
              <Link key={item.name} href={item.uri}>
                <button
                  key={item.uri}
                  className="w-full bg-ayellow rounded-md text-abluedark hover:-translate-y-2 transition-all duration-200 active:translate-y-4 hover:bg-ayellowdark"
                  //   className="special-button"
                >
                  <div className="special-button after:rounded-md after:opacity-35 after:bg-ayellowdark w-auto h-auto bg-transparent rounded-md md:p-5 p-6">
                    <span>{item.name}</span>
                  </div>
                </button>
              </Link>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
