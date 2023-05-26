import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("./scan.gltf");
  return <primitive object={gltf.scene} />;
}

export default function Home() {
  return (
    <Suspense>
      <Canvas camera={{fov: 10, position: [10, 10, -10]}} >
        <ambientLight />
        <Model />
        <OrbitControls target={[0,-1,1]} enableZoom={false} autoRotate minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2}/>
      </Canvas>
    </Suspense>
  );
}
