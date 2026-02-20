import React from "react";
import { Group } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Scene(props: any) {
  const group = React.useRef<Group>(null);

  const { scene, animations } = useGLTF("/hero.glb");

  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => {
      action?.reset();
      action?.play();
      action!.timeScale = 0.3;
    });
  }, [actions]);

  return <primitive ref={group} object={scene} {...props} />;
}

useGLTF.preload("/hero.glb");
