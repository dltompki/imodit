import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Car } from "./Car";

export const CarOrbit = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <OrbitControls enableDamping={false} rotateSpeed={0.8} />
      <ambientLight />
      <mesh>
        <meshStandardMaterial color={"#FF00FF"} />
      </mesh>
      <Car />
    </Canvas>
  );
};
