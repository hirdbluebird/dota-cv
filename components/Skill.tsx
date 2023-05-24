import Image from "next/image";

export const Skills = () => {
  return (
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
  );
};
