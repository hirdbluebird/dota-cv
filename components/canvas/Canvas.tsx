// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF, useFBX } from "@react-three/drei";
// import { Suspense } from "react";

// const Model = () => {
//   const gltf = useFBX("./cottage.fbx");

//   return (
//     <>
//       {/* <primitive object={gltf.scene} /> */}
//     </>
//   );
// };

// const DModel = () => (
//     <div />
// //   <Canvas eventPrefix="client">
// //       <Model />
// //       <OrbitControls />
// //       <Environment preset="sunset" background />
// //   </Canvas>
// );

// export default DModel;

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Model() {
//   const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
const gltf = useGLTF('./scan.gltf')
  return (<primitive object={gltf.scene} />)
}

export default function Home() {
  return (
    <div>
      <Suspense>
        <Canvas>
          <ambientLight />
          <Model />
        </Canvas>
      </Suspense>
    </div>
  )
}
