"use client";
import Image from "next/image";
import Model from "../components/canvas/Canvas";
import { ExperienceSection, Tab, Badge, Skills } from "../components";
import experience from "./experience";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="wrapper-canvas">
        <Model />
        <Badge />
      </section>
      <section className="wrapper-info">
        <h1 className="title">Eugene Mikhushkin</h1>
        <h3 className="subtitle with-image">
          <Image src="/js.png" width={24} height={24} alt="" />
          Javascript typescript frontend embeded
        </h3>
        <Skills />
        <button className="demo">demo hero</button>
        <Tab.Container defaultActiveTab="briefing">
          <Tab.Nav>
            <Tab.NavItem id="briefing">Briefing</Tab.NavItem>
            <Tab.NavItem id="experience">Experience</Tab.NavItem>
            <Tab.NavItem id="about">About</Tab.NavItem>
            <Tab.NavItem id="contacts">Contacts</Tab.NavItem>
          </Tab.Nav>
          <Tab.Content>
            <Tab.ContentItem id="briefing">
              Character name is Eugene. He's seeking for a good paid job with
              good project idea and good coworkers. He's already seen (as he
              think) many challenges and not afraid of outdated code, technical
              debts, absens of documentation and of course teammates, who love
              to push commits with 50+ files changes in core files. <br />{" "}
              Carreer in one company will definetely satisfy him. It's easier to
              work with less people as possible. Not a fan of big turnover rate
              in personal life and same on work. <br /> Job should be remote.
              Big debuff is that he don't know where he will live tommorow
              because of circumstances. <br /> Even if some requirments was not
              met, employers who "demo'ed" him was not dissapointed, because of
              versality of character.
            </Tab.ContentItem>
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
                <ExperienceSection key={exp.timeline} {...exp} />
              ))}
            </Tab.ContentItem>
            <Tab.ContentItem id="contacts">
              <p>
                <b>email</b>: <Link href={"mailto:bluebirdyourdestiny@gmail.com"}>bluebirdyourdestiny@gmail.com</Link>
              </p>
              <p>
                <b>telegram</b>: <Link href={"https://t.me/hirdbluebird"}>@hirdbluebird</Link>
              </p>
              <p>
                <b>skype</b>: <Link href={"skype:hird_blue_bird?chat"}>hird_blue_bird</Link>
              </p>
              <p>
                <b>github</b>: <Link href={"https://github.com/hirdbluebird"}>https://github.com/hirdbluebird</Link>
              </p>
            </Tab.ContentItem>
          </Tab.Content>
        </Tab.Container>
      </section>
    </main>
  );
}
