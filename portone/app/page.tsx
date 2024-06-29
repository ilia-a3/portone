import Image from "next/image";
const items: string[] = [
  "Programming",
  "Engineering",
  "Web Dev",
  "Computing",
  "Something",
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
  return (
    <>
      <section className="bg-gr-front-two h-[30rem] flex md:flex-row flex-col">
        <div className="p-10 w-100% md:max-w-110">
          <h1 className="text-5xl">Ilia A</h1>
          <p>
            I am a passionate worker with an various interests. I enjoy learning
            new technologies as much as I do developing them with creativity and
            my technical abilities with enough self motivation to achieve my
            goals.
            {/* I have worked making websites for small companies
            and offered internships for startups. Learning from online sites
            such as Udemy and over 3 years experiecne, I have learnt all the
            skills needed to develop the next full stack application. */}
          </p>
        </div>
        <div className="p-10 w-100% md:max-w-200 flex md:flex-col flex-row justify-between flex-wrap">
          {details.map((d) => (
            <div
              key={d.title}
              className="mb-10 bg-ayellowlighter p-4 rounded-md bg-opacity-20 max-w-52"
            >
              <h3 className="text-2xl">
                <b>{d.title}</b>
              </h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col lg:flex-row h-front-first-h bg-gr-front-one order-1">
        <div className="hidden w-0 h-0 lg:w-50% lg:h-front-first p-5 bg-red-900">
          {/* <img src="/background-front-1.svg" /> */}
          <div className="bg-black lg:w-100% lg:h-100%"></div>
        </div>
        <div className="w-100% lg:w-50% h-auto sm:pr-5">
          <div className="p-10 text-left">
            <h2 className="text-5xl mb-2">
              Fields of
              <span className="text-abluelighttext underlinemaybe ml-5 pl-2 pr-2 cool-gradient">
                interest
              </span>
            </h2>
            <p className="mt-10">Click on each to learn more!👇</p>
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
