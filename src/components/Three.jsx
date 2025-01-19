import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

function BasketballScene() {
  const { scene } = useGLTF("/assets/mini-room-final.glb");
  const bakedTexture = useTexture("/assets/baked-3.jpg");

  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ map: bakedTexture });
        child.material.needsUpdate = true;
        child.geometry.computeBoundingBox();
      }
    });
  }, [scene, bakedTexture]);

  return <primitive object={scene} />;
}

export default function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [2, 3, 6], fov: 50 }}>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional light simulating sunlight */}
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={0.7} 
        castShadow 
      />
      
      {/* Point light for focused illumination */}
      <pointLight 
        position={[0, 5, 0]} 
        intensity={1.0} 
        color="white" 
      />
      
      {/* SpotLight for dramatic focused lighting */}
      <spotLight 
        position={[2, 5, 3]} 
        angle={0.3} 
        intensity={1.2} 
        castShadow 
      />

      <OrbitControls enableDamping />
      <BasketballScene />
    </Canvas>
  );
}

