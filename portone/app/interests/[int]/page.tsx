import Link from "next/link";

let yes: {
  title: string;
  imgs: { img: string; alt: string }[];
  txts: string[];
};

const contents: (typeof yes)[] = [
  {
    title: "Programming",
    imgs: [{ img: "", alt: "" }],
    txts: [""],
  },
  {
    title: "Engineering",
    imgs: [{ img: "", alt: "" }],
    txts: [""],
  },
  {
    title: "Web Dev",
    imgs: [{ img: "", alt: "" }],
    txts: [""],
  },
  {
    title: "Computing",
    imgs: [{ img: "", alt: "" }],
    txts: [""],
  },
  {
    title: "Something",
    imgs: [{ img: "", alt: "" }],
    txts: [""],
  },
];

const getContent = (input: string): typeof yes | null => {
  let result = null;
  contents.forEach((element) => {
    const f = input.replaceAll("-", " ");

    if (element.title.toLowerCase() == f) {
      result = element;
    }
  });
  return result;
};

export default function Interest({ params }: { params: { int: string } }) {
  const content = getContent(params.int);
  return (
    <>
      {content != null ? (
        <div className="">
          <section>
            <h1 className=" font-playright text-4xl text-center pt-10 pb-10 text-gray-700 bg-gray-300 ">
              <i className="unerlineinterest ml-5 pl-1 pr-1 cool-gradient">
                {content.title}
              </i>
            </h1>
          </section>
        </div>
      ) : (
        <>
          <h1 className="center text-5xl">
            ERROR 404 - Sorry this page couldn&apos;t be found
          </h1>
          <Link className="text-white bg-black p-2" href="/">
            Return Home
          </Link>
        </>
      )}
    </>
  );
}
