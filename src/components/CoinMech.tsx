import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  MeshReflectorMaterial, 
  Environment,
  PerspectiveCamera,
  OrbitControls
} from '@react-three/drei';
import { 
  Physics, 
  RigidBody, 
  CuboidCollider,
  CylinderCollider,
  useRapier,
  RapierRigidBody,
  vec3,
  quat,
  euler
} from '@react-three/rapier';
import { Mesh, Quaternion, Euler } from 'three';
import { useDrag } from '@use-gesture/react';

import { Attractor } from "@react-three/rapier-addons";


const COIN_VALUE = 1; // seconds per coin

function CoinSlotTrigger({ onCoinInserted }: { onCoinInserted: () => void }) {
  return (
    <RigidBody type="fixed" position={[1, 1.25, -1]} sensor>
      <CuboidCollider 
        args={[1, 0.25, 0.25]} 
        onIntersectionEnter={(e) => {
          if (e.other.rigidBodyObject?.userData?.type === 'coin') {
            onCoinInserted();
          }
        }}
      >
        <mesh>
          <boxGeometry args={[2, 0.5, 0.5]} />
          <meshStandardMaterial wireframe color="red" />
        </mesh>
      </CuboidCollider>
    </RigidBody>
  );
}

function Coin({ position }: { position: [number, number, number] }) {
  const rigidBody = useRef<RapierRigidBody>(null);
  const visualRef = useRef<Mesh>(null);
  const [isGrabbed, setIsGrabbed] = useState(false);
  const LOCKED_Z = -0.7;

  useFrame(() => {
    if (isGrabbed && rigidBody.current) {
      const coin = rigidBody.current;
      const targetRotation = new Euler(Math.PI / 2, 0, Math.PI / 2);
      const targetQuat = new Quaternion().setFromEuler(targetRotation);
      
      const currentQuat = new Quaternion();
      const rot = coin.rotation();
      const quat = new Quaternion(rot.x, rot.y, rot.z, rot.w);
      currentQuat.setFromEuler(new Euler().setFromQuaternion(quat));
      
      currentQuat.slerp(targetQuat, 0.1);
      
      coin.setNextKinematicRotation(currentQuat);
    }
  });

  const bind = useDrag(({ down, xy, movement: [mx, my] }) => {
    if (!rigidBody.current) return;
    const coin = rigidBody.current;

    if (down) {
      setIsGrabbed(true);
      document.body.style.cursor = 'grabbing';
      coin.setBodyType(2, true);
      
      coin.setLinvel({ x: 0, y: 0, z: 0 }, true);
      coin.setAngvel({ x: 0, y: 0, z: 0 }, true);
      const pos = coin.translation();
      coin.setTranslation({ x: mx / 300, y: -my / 300, z: pos.z }, true);
    } else {
      setIsGrabbed(false);
      document.body.style.cursor = 'auto';
      coin.setBodyType(0, true);
    }
  });

  return (
    <RigidBody
      ref={rigidBody}
      position={position}
      userData={{ type: 'coin' }}
      {...bind()}
    >
      <mesh
        ref={visualRef}
        castShadow
      >
        <cylinderGeometry args={[0.12, 0.12, 0.025, 32]} />
        <meshStandardMaterial 
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          emissive="#000000"
          emissiveIntensity={0}
        />
      </mesh>
    </RigidBody>
  );
}

function CoinStack({ count = 10 }) {
  return Array.from({ length: count }).map((_, i) => (
    <Coin 
      key={i} 
      position={[
        Math.sin(i * 1.2) * 0.3 + (i % 3) * 0.1,
        1.5 + Math.floor(i / 3) * 0.05,
        Math.cos(i * 1.5) * 0.2 - 1
      ]}
    />
  ));
}

function Ground() {
  return (
    <RigidBody type="fixed" position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <CuboidCollider args={[5, 5, 0.1]}>
        <mesh receiveShadow>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            mirror={0.5}
            resolution={1024}
            mixBlur={8}
            mixStrength={1}
            roughness={1}
            depthScale={1}
            color="#888"
          />
        </mesh>
      </CuboidCollider>
    </RigidBody>
  );
}

function CoinBox() {
  return (
    <RigidBody type="fixed" position={[0, 0.5, -1]}>
      {/* Main box body */}
      <CuboidCollider args={[0.25, 0.1, 0.3]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[0.5, 0.4, 0.4]} />
          <meshPhysicalMaterial 
            color="#444444"
            roughness={0.4}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            metalness={0}
          />
        </mesh>
        <Attractor range={0.2} strength={1} />
      </CuboidCollider>

      {/* Coin slot hole */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.08, 0.15, 0.4]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      {/* Coin slot sensor */}
      <CuboidCollider 
        args={[0.04, 0.075, 0.2]} 
        position={[0, 0.2, 0]}
        sensor
      />

      {/* Slot guides */}
      <mesh position={[-0.06, 0.2, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.4]} />
        <meshPhysicalMaterial color="#333333" />
      </mesh>
      <mesh position={[0.06, 0.2, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.4]} />
        <meshPhysicalMaterial color="#333333" />
      </mesh>
    </RigidBody>
  );
}

function Scene() {
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  const handleCoinInserted = () => {
    setTimeRemaining(prev => prev + COIN_VALUE);
    setIsActive(true);
  };
  
  useEffect(() => {
    if (!isActive) return;
    if (timeRemaining <= 0) {
      setIsActive(false);
      return;
    }
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, timeRemaining]);
  
  return (
    <Physics gravity={[0, -9.8, 0]} debug>
      <CoinSlotTrigger onCoinInserted={handleCoinInserted} />
      <CoinBox />
      <CoinStack />
      <Ground />
      <Environment preset="sunset" />
    </Physics>
  );
}

export default function CoinMech() {
  return (
    <div className="w-full h-[600px]">
      <Canvas shadows>
        <color attach="background" args={['lightpink']} />
        <Scene />
        <PerspectiveCamera makeDefault position={[0, 0.5, 1]} rotation={[0, 0, 0]} />
        <OrbitControls enableZoom enablePan enableRotate />
      </Canvas>
    </div>
  );
}