// import { useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// // import * as THREE from "three";

// export const AnimatedBackground = () => {
//     const particles = useRef();
//     const particleCount = 5000;
//     const positions = new Float32Array(particleCount * 3);

//     // Генерация случайных позиций для частиц
//     for (let i = 0; i < particleCount * 3; i++) {
//         positions[i] = (Math.random() - 0.5) * 10;
//     }

//     return (
//         <Canvas
//             style={{
//                 height: "100vh",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 zIndex: -1,
//             }}
//         >
//             <Points ref={particles} positions={positions} frustumCulled={false}>
//                 <PointMaterial size={0.02} sizeAttenuation depthWrite={false} />
//             </Points>
//         </Canvas>
//     );
// };

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = () => {
  const ref = useRef();
  const particleCount = 10000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.01;
    ref.current.rotation.y += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial size={0.01} sizeAttenuation transparent depthWrite={false} color="white" />
    </Points>
  );
};

export const AnimatedBackground = () => {
  return (
    <Canvas style={{ height: '100vh', backgroundColor: 'black' }}>
      <Stars />
    </Canvas>
  );
};

// export default AnimatedBackground;
