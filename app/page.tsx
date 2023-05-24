"use client";
import Image from "next/image";
import Model from "../components/canvas/Canvas";
import { ExperienceSection, Tab } from "../components";
import experience from "./experience"

export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        height: "100%",
      }}
    >
      <section className="wrapper-canvas">
        <Model />
        <div
          className="level"
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            padding: "50px",
            animation: "glow 3s infinite",
            transition: "all 1s linear",
          }}
        >
          <Image src="/level.webp" width={100} height={100} alt="" />
          <span
            style={{
              position: "absolute",
              fontSize: "40px",
              top: "50%",
              right: "50%",
              transform: "translate(50%, -50%)",
              textShadow: "black 0 0 5px",
            }}
          >
            8
          </span>
        </div>
      </section>
      <section
        style={{
          maxHeight: "100%",
          overflow: "scroll",
        }}
      >
        <h2 className="title">Eugene Mikhushkin</h2>
        <h4 className="subtitle with-image">
          <Image src="/js.png" width={24} height={24} alt="" />
          Javascript typescript frontend embeded
        </h4>
        <div className="skills">
          <div className="tooltip">
            <Image src="/electron.png" width={50} height={50} alt="" />
          </div>
          <div className="tooltip">
            <Image src="/next.png" width={50} height={50} alt="" />
          </div>
          <div className="tooltip">
            <Image src="/react.png" width={60} height={50} alt="" />
          </div>
          <div className="tooltip">
            <Image src="/node.png" width={50} height={50} alt="" />
          </div>
        </div>
        <div>
          <button className="demo">demo hero</button>
        </div>
        <Tab.Container defaultActiveTab="about">
          <Tab.Nav>
            <Tab.NavItem id="about">About</Tab.NavItem>
            <Tab.NavItem id="experience">Experience</Tab.NavItem>
            <Tab.NavItem id="contacts">Contacts</Tab.NavItem>
          </Tab.Nav>
          <Tab.Content>
            <Tab.ContentItem id="about">
              Worked with JavaScript on client-side and backend, embeded. <br />
              Ate a dog on template creation of a site, familiar with popular UI
              libraries and built own. Took a part in creation of React engine,
              which generated sites depending on configs. Yep, two or more sites
              (domains) in one code base. Including dark modes. So I know how to
              center "div". <br /> Prefer Redux. Prefer React. Life is too short
              to get familiar with all UI frameworks and state managers, don't
              propose me anything else please. <br /> Experience in creation of
              custom Webpack plugins and custom sonfigs. <br /> Familiar with
              unit testing, also familiar with end-to-end testing and setup.{" "}
              <br /> Managed juniors, made some code reviews, mentoring. <br />{" "}
              Git, terminal. That's the way. <br /> Unix is pretty good, Windows
              is for games to me, but I don't mind if it will be an environment.
              <br /> Enthusiast, writing articles about code or coders life.
              Keep learning in spare time. I have a strong feeling, that I'm
              still somewhere at the top of iceberg of coding, I'm urge to dive
              deeper.
            </Tab.ContentItem>
            <Tab.ContentItem id="experience">
              {experience.map((exp) => (
                <ExperienceSection {...exp} />
              ))}
            </Tab.ContentItem>
            <Tab.ContentItem id="contacts">contacts</Tab.ContentItem>
          </Tab.Content>
        </Tab.Container>
      </section>
    </main>
  );
}
