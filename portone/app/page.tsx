import Image from "next/image";
const items: [string, string, string, string, string] = [
  "Programming",
  "Engineering",
  "Web Dev",
  "Computing",
  "Something",
];
export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row h-front-first-h bg-gr-front-one order-1">
        <div className="hidden w-0 h-0 lg:w-50% lg:h-front-first p-5 bg-red-900">
          {/* <img src="/background-front-1.svg" /> */}
          <div className="bg-black lg:w-100% lg:h-100%"></div>
        </div>
        <div className="w-100% lg:w-50% h-auto sm:pr-5">
          <div className="p-10 text-left">
            <h2 className="text-5xl mb-2">
              Fields of{" "}
              <span className="text-abluelight underlinemaybe">interest</span>
            </h2>
            <p>Click on each to learn more!👇</p>
          </div>
          <ul className="text-right w-100% font-jb" dir="rtl">
            {items.map((item) => (
              <button
                key={item}
                className="flex flex-row m-5 w-90% sm:m-10 pr-4 p-10 sm:pr-10 bg-gray-300 bg-opacity-50 sm:w-110 YES  border-neutral-400 border-2 text-neutral-600 hover:text-white hover:shadow-[inset_-36rem_0_0_0] hover:shadow-ayellowlighter duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                <span className="max-first">
                  <img
                    src="/bulletin1.svg"
                    alt="bulletin for list"
                    width="50"
                    className="fill-yellow-400"
                  />
                </span>
                <span className="text-4xl mr-5">{item}</span>
              </button>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
