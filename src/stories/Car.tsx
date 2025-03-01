import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/Addons.js";

export function Car() {
  const fbx = useLoader(FBXLoader, "/suzuki_kei_truck");
  return <primitive object={fbx} scale={[0.5, 0.5, 0.5]} />;
}
