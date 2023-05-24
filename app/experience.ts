export interface Responsibility {
    title: string;
    text?: string;
}

export interface ExperienceProps {
    company: string;
    position: string;
    timeline: string;
    description: string;
    responsibilities?: Responsibility[];
}

export default [
  {
    company: "PixelsMatter",
    position: "Electron Developer",
    timeline: "december 2021 - june 2021",
    description: "Worked on a display UI for trolley robot for golf clubs.",
    responsibilities: [
      {
        title: "Adobe to React",
        text: "Port design to application.",
      },
      {
        title: "Electron/Node NAPI briedge",
        text: "Interactions with hardware via Node NAPI briedge (c++ addons).",
      },
      {
        title: "Electron to SQLCipher",
        text: "Write and optimize DB queries. SQLite under Cipher.",
      },
      {
        title: "Internal API interactions",
        text: "Project had multiple services on different servers. Login, statistics, device information requests, etc.",
      },
      {
        title: "Project migration between Electron version",
        text: "Because of glitches project was moved to different Electron and NodeJS version. Huge work with packages and build system."
      },
      {
        title: "End-to-end tests integration",
        text: "Ecosystem was created based on Spectron."
      },
      {
        title: "Documentation support",
        text: "Yep, even few sentences was wrote xD."
      },
      {
        title: "Git strategies, work with international team, code reviews",
        text: "Managment of internation team and support of Git flow."
      },
    ],
  },
  {
    company: "ProCodersTech",
    position: "NextJS Developer",
    timeline: "october 2020 - december 2021 (1 year 1 month)",
    description:
      "Worked on a couple of projects related to NextJS (server-side React). Major is gambling site and was done:",
    responsibilities: [
      {
        title: "Migration from React to NextJS",
        text: "A site was written in React and served by nxginx, and for the sake of SEO and performance was migrated to NextJS. Pages (URLs) were migrated one by one and were implemented.",
      },
      {
        title: "Multi-language support",
        text: "Was designed solution with library called next-i18next, which supports translations not only inside dynamic React, but hydration too (pre-rendered of React to HTML).",
      },
      {
        title: "Multi-brand support",
        text: "During build in Docker environment was injected NODE_ENV variables, such as brand name, which helped Webpack to choose via alias brand folder and consume brand features, visuals (Material UI supports that), images, etc.",
      },
      {
        title: "Migration from React classes to Hooks",
        text: "The codebase of the previous project in some places was not compatible with a new version of React and because of that was rewritten.",
      },
      {
        title: "Development of new features, UI improvement",
      },
      {
        title: "Support of juniors, code reviews",
      },
    ],
  },
  {
    company: "Uadreams",
    position: "React Developer",
    timeline: "october 2020 - october 2021 (1 year)",
    description:
      "Worked on a couple of projects related to NextJS (server-side React). Major is gambling site and was done:",
    responsibilities: [
      {
        title: "Migration to Webpack",
        text: "Initially, site files were bundled by Gulp, which had no live reload and no build modes. All settings were copied and moved to Webpack configs, some of the features were moved to self-written Webpack plugins.",
      },
      {
        title: "Creation of template",
        text: "was created elementary components (buttons, input-controls, typography, etc.), components (widgets), pages. CSS code of the site was reduced in twice (from 1.4mb to 700kb, from 42k lines to 24k). Was designed a new file tree.",
      },
      {
        title: "Migration to React",
        text: "parts of the site was rewritten from HTML+jQuery+Python to React",
      },
      {
        title: "Creation of React constructor",
        text: "based on the CSS template was designed elementary components on React and replaced existing duplications.",
      },
      {
        title: "Control Panel migration",
        text: "migration of CPanel from HTML and Bootstrap 2.0 to React + Redux + React-Bootstrap",
      },
    ],
  },
  {
    company: "Freelance",
    position: "Web Developer",
    timeline: "november 2015 - october 2019 (4 years)",
    description:
      "During this time took a part in a bunch of projects and worked in many companies, gained basics of Web. The major experience was with MVC frameworks based on languages such as: Django (Python), Razor (C#), PHP (WordPress, Zend), JS (Angular 1-2, React), a lot of jQuery coding. Sometimes was busy with backend.",
  },
];
