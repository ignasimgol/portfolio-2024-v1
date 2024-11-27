import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import './css/Three.css';
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Componente principal de la escena
function BasketballScene() {
  const { scene } = useGLTF("/assets/basketbal-ball.glb");
  const bakedTexture = useTexture("/assets/baked.jpg");

  // Configuración de textura
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;

  // Configuración de materiales
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ map: bakedTexture });
        child.material.needsUpdate = true;
        child.geometry.center();
      }
    });
  }, [scene, bakedTexture]);

  return <primitive object={scene} />;
}

// Componente envuelto dentro de Canvas
export default function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [4, 2, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls enableDamping />
      <BasketballScene />
    </Canvas>
  );
}
