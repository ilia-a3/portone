const sections: { heading: string; txt: string }[] = [
  {
    heading: "Starting Young",
    txt: "I've been interested in programming from a young age and it only ripened over time. At 13 I saved up enough money to build my PC which got me into the world of computers which only led me into my passion further. Throughout high school I had Gradually I gained interest in more engineering fields and dabbling in different languages and frameworks as well as graphic design and product/residential engineering.",
  },
  {
    heading: "About My Personality",
    txt: "I am a self motivated learner letting nothing get in my way when im focused. When I commit to projects I make sure they are done properly and dedicate my time accordingly.",
  },
  {
    heading: "My Interests",
    txt: "I have always interested in exploring new technologies and frameworks. I like to create things. I enjoy learning about and creating websites as much as I do designing. I have also found interest in computers and technology around us. These fascinate me and fuel my hunger to keep going.",
  },
];

export default function AboutPage() {
  return (
    <section id="AboutMePage" className="bg-gr-front-two min-h-dvh">
      <h1 className="mt-10 text-4xl text-center text-[#c76842]">
        A Little More About Me
      </h1>
      <p></p>
      {sections.map((s) => (
        <div className="p-4 text-center mt-8 max-w-200 mr-auto ml-auto">
          <h2 className="text-2xl text-[#af7267]">{s.heading}</h2>
          <p className="text-xl mt-5 text-[#5b6772]">{s.txt}</p>
        </div>
      ))}
    </section>
  );
}
