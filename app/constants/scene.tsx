/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Scene(props: any) {
  const group = React.useRef<Group>(null);

  const { scene, animations } = useGLTF("/3D/hero.glb");

  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => {
      action?.reset();
      action?.play();
      action!.timeScale = 0.3;
    });
  }, [actions]);

  useFrame((state) => {
    if (!group.current) return;

    const baseY = Math.PI - 0.2;

    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    const targetY = baseY + -mouseX * 0.05;
    const targetX = -mouseY * 0.02;

    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;

    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.02;
  });

  return <primitive ref={group} object={scene} {...props} />;
}

useGLTF.preload("/3D/hero.glb");
