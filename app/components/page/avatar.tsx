import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const MODEL_URL = "https://models.readyplayer.me/691e7539fb99478e4120b158.glb";

function Avatar() {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} scale={2.5} position={[0, -3.5, 1]} />;
}

export default function AvatarViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 40 }}>
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Avatar />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
