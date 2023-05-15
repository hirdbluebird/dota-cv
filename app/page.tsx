'use client'
import Image from 'next/image'
import Link from 'next/link'
import Model from '../components/canvas/Canvas'


export default function Home() {
  return (
    <main>
      <div>
        <Model />
      </div>
      <div>
        <div className='level'>
          <Image src='/level.webp' width={100} height={100} alt="" />
          8
        </div>
        <h2 className='title'>Eugene Mikhushkin</h2>
        <h4 className='subtitle with-image'>
          <Image src='/js.png' width={24} height={24} alt="" />
          Javascript developer
        </h4>
        <div className='skills'>
          <div className='tooltip'>
            <Image src='/electron.png' width={50} height={50} alt="" />
          </div>
          <div className='tooltip'>
            <Image src='/next.png' width={50} height={50} alt="" />
          </div>
          <div className='tooltip'>
            <Image src='/react.png' width={60} height={50} alt="" />
          </div>
          <div className='tooltip'>
            <Image src='/node.png' width={50} height={50} alt="" />
          </div>
        </div>
        <div>
          <button className='button demo'>demo hero</button>
        </div>
        <div>
          <nav>
            <Link href={"#"}>
              Briefing
            </Link>
            <Link href={"#"}>
              Experience
            </Link>
            <Link href={"#"}>
              Contacts
            </Link>
            <Link href={"#"}>
              About
            </Link>
          </nav>
          <ul>
            <ol>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros magna, mollis ac lectus viverra, euismod ultrices justo. Etiam ornare ut libero non varius. Cras dignissim lectus ut consequat porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla consequat enim, vitae egestas dolor ipsum eget nibh. Donec sagittis augue id mauris egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In faucibus, dui non efficitur blandit, turpis sapien lacinia lacus, nec convallis ante dolor eget ante. Aenean at tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu arcu in vestibulum. Pellentesque orci urna, convallis in scelerisque in, blandit at libero. Cras nec venenatis velit. In hac habitasse platea dictumst.</ol>
            <ol>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros magna, mollis ac lectus viverra, euismod ultrices justo. Etiam ornare ut libero non varius. Cras dignissim lectus ut consequat porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla consequat enim, vitae egestas dolor ipsum eget nibh. Donec sagittis augue id mauris egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In faucibus, dui non efficitur blandit, turpis sapien lacinia lacus, nec convallis ante dolor eget ante. Aenean at tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu arcu in vestibulum. Pellentesque orci urna, convallis in scelerisque in, blandit at libero. Cras nec venenatis velit. In hac habitasse platea dictumst.</ol>
            <ol>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros magna, mollis ac lectus viverra, euismod ultrices justo. Etiam ornare ut libero non varius. Cras dignissim lectus ut consequat porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla consequat enim, vitae egestas dolor ipsum eget nibh. Donec sagittis augue id mauris egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In faucibus, dui non efficitur blandit, turpis sapien lacinia lacus, nec convallis ante dolor eget ante. Aenean at tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu arcu in vestibulum. Pellentesque orci urna, convallis in scelerisque in, blandit at libero. Cras nec venenatis velit. In hac habitasse platea dictumst.</ol>
            <ol>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit vitae ante nec malesuada. Curabitur eros magna, mollis ac lectus viverra, euismod ultrices justo. Etiam ornare ut libero non varius. Cras dignissim lectus ut consequat porta. Sed dapibus, erat ullamcorper congue faucibus, eros nulla consequat enim, vitae egestas dolor ipsum eget nibh. Donec sagittis augue id mauris egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In faucibus, dui non efficitur blandit, turpis sapien lacinia lacus, nec convallis ante dolor eget ante. Aenean at tempus ipsum. Nam tempus ornare est ut mollis. Praesent iaculis eu arcu in vestibulum. Pellentesque orci urna, convallis in scelerisque in, blandit at libero. Cras nec venenatis velit. In hac habitasse platea dictumst.</ol>
          </ul>
        </div>
      </div>
      <script src='anime.js' />
    </main>
  )
}
