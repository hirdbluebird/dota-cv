import Image from "next/image"

export const Badge = () => {
    return (
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
          <Image src="/level.webp" width={100} height={100} alt="" title="Years of experience" />
          <span
            style={{
              position: "absolute",
              fontSize: "40px",
              top: "50%",
              right: "50%",
              transform: "translate(50%, -50%)",
              textShadow: "black 0 0 5px",
              pointerEvents: 'none'
            }}
          >
            8
          </span>
        </div>
    )
}