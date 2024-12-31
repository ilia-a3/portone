"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Heading from "../Heading";
const timeline: {
  company: string;
  position: string;
  img: string;
  description: string;
  time: string;
}[] = [
  {
    company: "DAIS BUILD",
    position: "Full Stack Website Developer",
    img: "",
    description:
      "I have worked with Dais Build company for a long time to create and maintain an website along with tools such as email and setting everything up for them. This job helped me start my career and build on my skills as a developer",
    time: "2022 - PRESENT",
  },
  {
    company: "Creative Core Cloud",
    position: "API Developer",
    img: "",
    description:
      "I have worked very hard in a role in CCC as an intern to develop a dynamic API with Spring Boot for over a year. It required lots of weekly deadlines and 15+ hours a week schedule and enabled me to work in a fast paced team environment.",
    time: "2022 - 2023",
  },
  {
    company: "First Go Licence",
    position: "Full Stack Website Developer",
    img: "",
    description:
      "Creating another larger scale application, I had to create a website for booking and managing lessons with driving instructors along with creating a system to organise and automate everything for my client so bookings can be done and managed easily.",
    time: "2024",
  },
  {
    company: "Toraja Wonders",
    position: "Full Stack Website Developer",
    img: "",
    description:
      "Worked independantly on a website for a tourism agency which required api endpoints to customise the website. Being one of my first large project, creating Toraja Wonders allowed me to gain experience creating a full stack website which involved complex apis and pages to create and manage pages.",
    time: "2022",
  },
  {
    company: "Fartak",
    position: "Full Stack Website Developer",
    img: "",
    description:
      "I have created a large website for showcasing and booking services for Fartak with the use of various tools.",
    time: "2022",
  },
  {
    company: "Dark Horse Painting",
    position: "UI Website Developer",
    img: "",
    description:
      "I have worked at this company for a long time to create and maintain an website. This engagement with clients helped me better understand the workflow and deep dive into web development on my own",
    time: "2022",
  },
];
export default function ExperiencePage() {
  return (
    <>
      <Heading title="Past Experience" />
      <div className="bg-gr-front-two mt-10">
        <VerticalTimeline lineColor="#031d38">
          {timeline.map((t) => (
            <VerticalTimelineElement
              key={t.company}
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "#2a4a6b ",
                color: "#fff",
                boxShadow: "0px 5px 10px 5px  rgb(232,190,105)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #2a4a6b",
              }}
              //   textClassName="shadow-lg bg-coolgrad" radial-gradient(circle, rgba(232,190,105,1) 0%, rgba(55,65,81,1) 100%)
              date={t.time}
              dateClassName="text-ayellowlighter "
              iconStyle={{
                background: "#d49428",
                color: "#2a4a6b",
                // color: "#fff",
                boxShadow: "0 0 5px 2px #2a4a6b",
                width: "40px",
                height: "40px",
                marginLeft: "-20px",
                marginTop: "10px",
              }}
              icon={<div></div>}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title font-bold text-3xl text-ayellow">
                {t.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle italic text-xl text-ayellowl">
                {t.position}
              </h4>
              <p>{t.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
