import React, { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

function BasketballScene() {
  const { scene } = useGLTF("/assets/mini-room-8.glb");
  const bakedTexture = useTexture("/assets/baked88.png");

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

  useFrame(() => {
    scene.rotation.y += 0.002;
  });

  return <primitive object={scene} />;
}

export default function ThreeCanvas() {
  return (
    <div className="resposnive-canvas">
      <Canvas
        camera={{ position: [2, 3, 15], fov: 70 }}
        style={{
          width: '50%',
          aspectRatio: '4/3',
          margin: '0 auto',
        }}
      >
        {/* Luces y controles dentro del Canvas */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={0.7} castShadow />
        <pointLight position={[0, 5, 0]} intensity={1.0} color="white" />
        <spotLight position={[2, 5, 3]} angle={0.3} intensity={1.2} castShadow />

        <OrbitControls
          enableDamping
          maxPolarAngle={Math.PI / 3} // Restringe el movimiento hasta 60 grados hacia abajo
          minPolarAngle={Math.PI / 6} // Restringe el movimiento hasta 30 grados hacia arriba
          enableZoom={false}
        />
        <BasketballScene />
      </Canvas>
    </div>
  );
}