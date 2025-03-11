import { useRef, useState, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  MeshReflectorMaterial, 
  Text,
  Environment,
  DragControls,
  PerspectiveCamera,
  useVideoTexture,
  OrbitControls
} from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import * as THREE from 'three';
import { Mesh } from 'three';

const COIN_VALUE = 1; // seconds per coin

function CoinSlotTrigger({ onCoinInserted }: { onCoinInserted: () => void }) {
  const [ref] = useBox(() => ({ 
    args: [2, 0.5, 0.5], 
    isTrigger: true, 
    position: [1, 1.25, 0],
    collisionFilterGroup: 2,
    collisionFilterMask: 1,
    collisionResponse: true,
    onCollide: (e) => {
      console.log('Collision detected:', e.body.userData);
      if (e.body.userData?.type === 'coin') {
        onCoinInserted();
      }
    }
  }), useRef<Mesh>(null));
  
  return (
    <group>
      {/* Invisible trigger box */}
      <mesh ref={ref}>
        <boxGeometry args={[2, 0.5, 0.5]} />
        <meshStandardMaterial wireframe color="red" />
      </mesh>
      
      {/* Visible coin slot */}
      {/* <mesh position={[1, 1.25, 0]}>
        <boxGeometry args={[5, 1, 0.5]} />
        <meshStandardMaterial color="#333" />
      </mesh> */}
    </group>
  );
}

function Coin({ position }: { position: [number, number, number] }) {
  const [ref, api] = useBox(() => ({ 
    mass: 1, 
    position, 
    args: [0.15, 0.025, 0.15],
    userData: { type: 'coin' },
    collisionFilterGroup: 1,
    collisionFilterMask: 1 | 2 | 4,
    collisionResponse: true,
    material: {
      friction: 0.5,
      restitution: 0.2
    }
  }));

  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  
  // Lock Z position to collision box Z (0) while dragging
  const LOCKED_Z = 0;

  return (
    <DragControls
      dragLimits={[[-2, 2], [0, 3], [-1, 1]]}
      onHover={(hovering) => {
        document.body.style.cursor = hovering ? 'grab' : 'auto';
      }}
      onDragStart={(origin) => {
        setIsDragging(true);
        api.mass.set(0);
        dragStartY.current = origin.y;
        document.body.style.cursor = 'grabbing';
        // Snap to locked Z position when starting drag
        api.position.set(origin.x, origin.y, LOCKED_Z);
      }}
      onDrag={(localMatrix) => {
        const position = new THREE.Vector3();
        localMatrix.decompose(position, new THREE.Quaternion(), new THREE.Vector3());
        // Use locked Z position while dragging
        api.position.set(position.x, dragStartY.current, LOCKED_Z);
      }}
      onDragEnd={() => {
        setIsDragging(false);
        api.mass.set(1);
        api.velocity.set(0, -0.1, 0);
        document.body.style.cursor = 'auto';
      }}
    >
      <mesh 
        ref={ref}
        castShadow
      >
        <cylinderGeometry args={[0.15, 0.15, 0.025, 32]} />
        <meshStandardMaterial 
          color={isDragging ? "#FFB700" : "#FFD700"} 
          metalness={0.8} 
          roughness={0.2}
          emissive={isDragging ? "#884400" : "#000000"}
          emissiveIntensity={isDragging ? 0.3 : 0}
        />
      </mesh>
    </DragControls>
  );
}

function CoinStack({ count = 25 }: { count?: number }) {
  return Array.from({ length: count }).map((_, i) => (
    <Coin 
      key={i} 
      position={[
        Math.sin(i * 1.2) * 0.3 + (i % 3) * 0.1,  // Random X spread
        3 + Math.floor(i / 3) * 0.05,              // Stack height
        Math.cos(i * 1.5) * 0.2 + 1                // Random Z spread
      ]} // Scattered coin pile
    />
  ));
}

function VideoDisplay({ isActive, timeRemaining }: { isActive: boolean, timeRemaining: number }) {
  const videoTexture = useVideoTexture("https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4", {
    start: isActive,
    loop: false,
    muted: false,
    crossOrigin: "anonymous"
  });

  useEffect(() => {
    const video = videoTexture.source.data as HTMLVideoElement;

    if (!isActive || timeRemaining <= 0) {
      video.pause();
    } else {
      video.play();
    }
  }, [isActive, timeRemaining, videoTexture]);

  return (
    <group position={[0, .65, 0]}>
      {/* Video frame */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[2.2, 1.3, 0.1]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Video screen */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[2, 1.1]} />
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>
      
      {/* Timer display */}
      <group position={[0, 0.7, 0.1]}>
        <Text 
          fontSize={0.15}
          color="#ff0000"
          anchorX="center"
          anchorY="middle"
        >
          {isActive ? Math.ceil(timeRemaining) : "INSERT COIN"}
        </Text>
      </group>
    </group>
  );
}

function Ground() {
  const [ref] = usePlane(() => ({ 
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: 'Static',
    collisionFilterGroup: 4,
    collisionFilterMask: 1,
    material: {
      friction: 0.5,
      restitution: 0.2
    }
  }));
  
  return (
    <mesh ref={ref} receiveShadow>
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
  );
}

// The main scene component that will be inside the Canvas
function Scene() {
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  // Handle coin insertion
  const handleCoinInserted = () => {
    setTimeRemaining(prev => prev + COIN_VALUE);
    setIsActive(true);
  };
  
  // Timer logic
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
    <Physics gravity={[0, -9.8, 0]}>
      {/* <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow /> */}
      
      <VideoDisplay isActive={isActive} timeRemaining={timeRemaining} />
      <CoinSlotTrigger onCoinInserted={handleCoinInserted} />
      <CoinStack />
      <Ground />
      <Environment preset="sunset" />
    </Physics>
  );
}

// Main component that exports the Canvas wrapper
export default function Player() {
  return (
    <div className="w-full h-[600px]">
      <Canvas shadows>
        <color attach="background" args={['lightpink']} />
        <Scene />
        <PerspectiveCamera
              makeDefault
              position={[0, 1, 2.5]}
              rotation={[-0.2, 0, 0]}
            />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}
