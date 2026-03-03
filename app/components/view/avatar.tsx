import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const MODEL_URL = "https://models.readyplayer.me/691e7539fb99478e4120b158.glb";

function Avatar() {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} scale={2.5} position={[0, -3.6, 1]} />;
}

export default function AvatarViewer() {
  return (
    <div style={{ width: "100%", height: "700px", position: "relative" }}>
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

      <div
        className="block absolute w-full h-60 bottom-0 left-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 33, 69, 0) 0%, black 100%)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
        }}
      ></div>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
