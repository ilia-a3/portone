export default function Heading(props: { title: string }) {
  return (
    <h1 className=" font-playright text-4xl text-center pt-10 pb-10 text-gray-700 bg-gray-300 ">
      <i className="unerlineinterest ml-5 pl-1 pr-1 cool-gradient">
        {props.title}
      </i>
    </h1>
  );
}
