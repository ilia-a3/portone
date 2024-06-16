import Image from "next/image";
const items: [string, string, string, string, string] = [
  "Programming",
  "Computers",
  "Engineering",
  "Websites",
  "Technology",
];
export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-200 bg-ayellowl order-1">
        <div className="w-100% md:w-50% h-auto  p-5">
          {/* <img src="/background-front-1.svg" /> */}
          <div className="bg-black w-100% h-100%"></div>
        </div>
        <div className="w-100% md:w-50% h-auto pr-5 pt-16" dir="rtl">
          <ul className="text-right w-100% font-inc">
            {items.map((item) => (
              <li key={item} className="flex flex-row m-10">
                <span>
                  <img
                    src="/bulletin1.svg"
                    alt="bulletin for list"
                    width="50"
                    className="fill-yellow-400"
                  />
                </span>
                <span className="text-4xl mr-5">{item}</span>
              </li>
            ))}
          </ul>
          <div className="h-[1000px]"></div>
        </div>
      </section>
    </>
  );
}
