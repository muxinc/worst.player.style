import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  MeshReflectorMaterial,
  Environment,
  PerspectiveCamera,
  Text
} from '@react-three/drei';
import {
  Physics,
  RigidBody,
  CuboidCollider,
  RapierRigidBody
} from '@react-three/rapier';
import { Mesh, Quaternion, Euler, BoxGeometry } from 'three';
import { useDrag } from '@use-gesture/react';
import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import * as THREE from 'three';

// Add this outside of any component
let isAnyCoinBeingDragged = false;

function Coin({ position }: { position: [number, number, number] }) {
  const rigidBody = useRef<RapierRigidBody>(null);
  const visualRef = useRef<Mesh>(null);
  const [isGrabbed, setIsGrabbed] = useState(false);

  useFrame(() => {
    if (isGrabbed && rigidBody.current) {
      const coinPhysics = rigidBody.current;
      const targetRotation = new Euler(Math.PI / 2, 0, Math.PI / 2);
      const targetQuat = new Quaternion().setFromEuler(targetRotation);

      const currentQuat = new Quaternion();
      const rot = coinPhysics.rotation();
      const quat = new Quaternion(rot.x, rot.y, rot.z, rot.w);
      currentQuat.setFromEuler(new Euler().setFromQuaternion(quat));

      currentQuat.slerp(targetQuat, 0.1);

      coinPhysics.setNextKinematicRotation(currentQuat);
    }
  });

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (!rigidBody.current) return;
    const coinPhysics = rigidBody.current;

    if (down) {
      // Only allow grabbing if no other coin is being dragged
      if (!isAnyCoinBeingDragged || isGrabbed) {
        isAnyCoinBeingDragged = true;
        setIsGrabbed(true);
        document.body.style.cursor = 'grabbing';
        coinPhysics.setBodyType(2, true);

        const targetPos = {
          x: mx / 300,
          y: -my / 300,
          z: -0.65
        };

        coinPhysics.setNextKinematicTranslation(targetPos);
      }
    } else {
      if (isGrabbed) {
        isAnyCoinBeingDragged = false;
        setIsGrabbed(false);
        document.body.style.cursor = 'auto';
        coinPhysics.setBodyType(0, true);
        coinPhysics.applyImpulse({ x: 0, y: 0, z: -0.02 }, true);
      }
    }
  });

  return (
    <RigidBody
      ref={rigidBody}
      position={position}
      userData={{ type: 'coin' }}
      colliders="cuboid"
    >
      <mesh
        ref={visualRef}
        castShadow
        {...bind()}
      >
        <cylinderGeometry args={[0.10, 0.10, 0.02, 32]} />
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

function CoinStack({ count = 50 }) {
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
            color="#fff"
          />
        </mesh>
      </CuboidCollider>
    </RigidBody>
  );
}
function CoinBox({ onCoinInserted }: { onCoinInserted: () => void }) {
  const boxRef = useRef<Mesh>(null);
  const faceplateRef = useRef<Mesh>(null);

  useEffect(() => {
    if (!boxRef.current || !faceplateRef.current) return;

    // Create main box brush - reduced width from 0.5 to 0.3
    const mainBox = new Brush(new BoxGeometry(0.4, 0.6, 0.4));
    mainBox.updateMatrixWorld();

    // Create slot hole brush - moved to left side
    const slotHole = new Brush(new BoxGeometry(0.07, 0.3, 0.4));
    slotHole.position.x = -0.05; // Move hole to left side
    slotHole.updateMatrixWorld();

    // Create evaluator and subtract hole from box
    const evaluator = new Evaluator();
    const result = evaluator.evaluate(mainBox, slotHole, SUBTRACTION);

    // Update the box mesh geometry
    boxRef.current.geometry = result.geometry;

    // Create faceplate brush - reduced width from 0.25 to 0.2
    const faceplate = new Brush(new BoxGeometry(0.25, 0.40, 0.01));
    faceplate.updateMatrixWorld();

    // Subtract slot from faceplate
    const faceplateResult = evaluator.evaluate(faceplate, slotHole, SUBTRACTION);

    // Update the faceplate mesh geometry
    faceplateRef.current.geometry = faceplateResult.geometry;
  }, []);

  return (
    <RigidBody type="fixed" position={[-0.2, 0.30, -1]}>
      {/* Main box body - split into multiple colliders */}
      <group>
        {/* Bottom collider */}
        <CuboidCollider
          args={[0.15, 0.05, 0.2]}
          position={[0, -0.25, 0]}
        />

        {/* Left wall */}
        <CuboidCollider
          args={[0.02, 0.3, 2.2]}
          position={[-0.17, 0, 0]}
        />

        {/* Right wall */}
        <CuboidCollider
          args={[0.02, 0.3, 0.2]}
          position={[0.13, 0, 0]}
        />

        {/* Front wall (shorter to allow coin viewing) */}
        {/* <CuboidCollider
          args={[0.15, 0.15, 0.02]}
          position={[0, -0.15, 0.18]}
        /> */}

        {/* Visual meshes */}
        <mesh
          ref={boxRef}
          receiveShadow
          castShadow
        >
          <meshPhysicalMaterial
            color="#444444"
            roughness={0.4}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            metalness={0}
          />
        </mesh>

        {/* Wire tube coming out of coin box */}
        <mesh position={[-0.15, -0.25, -0.15]}>
          <tubeGeometry
            args={[
              new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(-0.1, 0, -0.05),
                new THREE.Vector3(-0.3, 0, -0.1),
                new THREE.Vector3(-0.5, 0, -0.05),
                new THREE.Vector3(-0.7, 0, 0)
              ]),
              64, // tubular segments
              0.02, // radius
              8, // radial segments
              false // closed
            ]}
          />
          <meshStandardMaterial
            color="#ff0000"
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Red faceplate */}
        <mesh
          ref={faceplateRef}
          position={[0, 0, 0.2]} // Slightly in front of box
          receiveShadow
          castShadow
        >
          <meshPhysicalMaterial
            color="#ff0000"
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.3}
            transparent
            opacity={0.8}
            emissive="#ff0000"
            emissiveIntensity={0.5}
          />
        </mesh>

        <Text
          position={[0.04, 0.10, 0.22]}
          fontSize={0.055}
          fontWeight="bold"
          color="white"
          textAlign="center"
          anchorY="middle"
        >
          25¢
        </Text>

        <Text
          position={[0.04, -0.02, 0.22]}
          fontSize={0.025}
          color="white"
          fontWeight="bold"
          textAlign="center"
          anchorY="middle"
        >
          INSERT
        </Text>

        <Text
          position={[0.04, -0.05, 0.22]}
          fontSize={0.022}
          fontWeight="bold"
          color="white"
          textAlign="center"
          anchorY="middle"
        >
          COIN TO
        </Text>

        <Text
          position={[0.04, -0.082, 0.22]}
          fontSize={0.04}
          color="white"
          textAlign="center"
          fontWeight="bold"
          anchorY="middle"
        >
          PLAY
        </Text>
      </group>

      {/* Coin slot sensor - moved to left side */}
      <CuboidCollider
        args={[0.13, 0.4, 0.08]}
        position={[-0.05, .1, -1]}
        sensor
        onIntersectionEnter={onCoinInserted}
      />
    </RigidBody>
  );
}

function Scene({ onCoinInserted }: { onCoinInserted: () => void }) {
  return (
    <Physics>
      <CoinBox onCoinInserted={onCoinInserted} />
      <CoinStack />
      <Ground />
      <Environment preset="sunset" />
    </Physics>
  );
}

export default function CoinMech({ onCoinInserted }: { onCoinInserted: () => void }) {
  return (
    <div className="w-full h-[600px]">
      <Canvas shadows>
        <Scene onCoinInserted={onCoinInserted} />
        <PerspectiveCamera makeDefault position={[-0.60, 0.35, 0.05]} rotation={[-0.04, -0.4, 0]} />
        {/* <OrbitControls target={[0, 0, -1]} enableZoom enablePan enableRotate /> */}
      </Canvas>
    </div>
  );
}