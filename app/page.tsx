import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>

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
      </div>
    </main>
  )
}
