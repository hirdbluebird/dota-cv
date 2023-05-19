"use client";
import Image from "next/image";
import Link from "next/link";
import Model from "../components/canvas/Canvas";

export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Model />
        <div
          className="level"
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            padding: "50px",
            animation: 'glow 3s infinite',
            transition: 'all 1s linear'

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
      </div>
      <div
        style={{
          maxHeight: "100%",
          overflow: "scroll",
        }}
      >
        <h2 className="title">Eugene Mikhushkin</h2>
        <h4 className="subtitle with-image">
          <Image src="/js.png" width={24} height={24} alt="" />
          Javascript developer
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
        <div>
          <ul className="nav nav-tabs">
            <ol className="active">Briefing</ol>
            <ol>Experience</ol>
            <ol>Contacts</ol>
            <ol>About</ol>
          </ul>
          <div className="tab-pane">
            <div className="tab-content active">
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros
              magna, mollis ac lectus viverra, euismod ultrices justo. Etiam
              ornare ut libero non varius. Cras dignissim lectus ut consequat
              porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla
              consequat enim, vitae egestas dolor ipsum eget nibh. Donec
              sagittis augue id mauris egestas dignissim. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In faucibus, dui non efficitur blandit, turpis sapien
              lacinia lacus, nec convallis ante dolor eget ante. Aenean at
              tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu
              arcu in vestibulum. Pellentesque orci urna, convallis in
              scelerisque in, blandit at libero. Cras nec venenatis velit. In
              hac habitasse platea dictumst.
            </div>
            <div className="tab-content">
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros
              magna, mollis ac lectus viverra, euismod ultrices justo. Etiam
              ornare ut libero non varius. Cras dignissim lectus ut consequat
              porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla
              consequat enim, vitae egestas dolor ipsum eget nibh. Donec
              sagittis augue id mauris egestas dignissim. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In faucibus, dui non efficitur blandit, turpis sapien
              lacinia lacus, nec convallis ante dolor eget ante. Aenean at
              tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu
              arcu in vestibulum. Pellentesque orci urna, convallis in
              scelerisque in, blandit at libero. Cras nec venenatis velit. In
              hac habitasse platea dictumst.
            </div>
            <div className="tab-content">
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros
              magna, mollis ac lectus viverra, euismod ultrices justo. Etiam
              ornare ut libero non varius. Cras dignissim lectus ut consequat
              porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla
              consequat enim, vitae egestas dolor ipsum eget nibh. Donec
              sagittis augue id mauris egestas dignissim. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In faucibus, dui non efficitur blandit, turpis sapien
              lacinia lacus, nec convallis ante dolor eget ante. Aenean at
              tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu
              arcu in vestibulum. Pellentesque orci urna, convallis in
              scelerisque in, blandit at libero. Cras nec venenatis velit. In
              hac habitasse platea dictumst.
            </div>
            <div className="tab-content">
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros
              magna, mollis ac lectus viverra, euismod ultrices justo. Etiam
              ornare ut libero non varius. Cras dignissim lectus ut consequat
              porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla
              consequat enim, vitae egestas dolor ipsum eget nibh. Donec
              sagittis augue id mauris egestas dignissim. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In faucibus, dui non efficitur blandit, turpis sapien
              lacinia lacus, nec convallis ante dolor eget ante. Aenean at
              tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu
              arcu in vestibulum. Pellentesque orci urna, convallis in
              scelerisque in, blandit at libero. Cras nec venenatis velit. In
              hac habitasse platea dictumst.
            </div>
          </div>
        </div>
      </div>
      <script src="anime.js" />
    </main>
  );
}
