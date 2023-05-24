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
      <Canvas>
        <ambientLight />
        <Model />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
