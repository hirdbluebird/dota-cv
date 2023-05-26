import Image from "next/image";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="tooltip">
        <Image src="/electron.png" width={50} height={50} alt="ElectronJS" title="ElectronJS" />
      </div>
      <div className="tooltip">
        <Image src="/next.png" width={50} height={50} alt="NextJS" title="NextJS" />
      </div>
      <div className="tooltip">
        <Image src="/react.png" width={60} height={50} alt="ReactJS" title="ReactJS" />
      </div>
      <div className="tooltip">
        <Image src="/node.png" width={50} height={50} alt="NodeJS" title="NodeJS" />
      </div>
    </div>
  );
};
