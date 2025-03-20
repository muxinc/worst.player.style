import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import debounce from 'debounce';

import {
    MeshTransmissionMaterial,
    Environment,
    PerspectiveCamera,
    Text,
    useNormalTexture
} from '@react-three/drei';
import {
    Physics,
    RigidBody,
    CuboidCollider,
    CylinderCollider,
    RapierRigidBody
} from '@react-three/rapier';
import { Mesh, Quaternion, Euler, BoxGeometry, TextureLoader, RepeatWrapping } from 'three';
import { useDrag } from '@use-gesture/react';
import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import * as THREE from 'three';

// Add this outside of any component
let isAnyCoinBeingDragged = false;

function Coin({ position }: { position: [number, number, number] }) {
    const rigidBody = useRef<RapierRigidBody>(null);
    const visualRef = useRef<Mesh>(null);
    const normRepeat = 1;
    const [normalMap] = useNormalTexture(
        67, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
        // second argument is texture attributes
        {
            offset: [0, 0],
            repeat: [normRepeat, normRepeat],
            anisotropy: 8
        }
    )

    const logoTexture = useLoader(TextureLoader, '/mux-logo.png');

    // Set up logo texture
    useEffect(() => {
        if (logoTexture) {
            logoTexture.center.set(0.5, 0.5); // Center the texture
            logoTexture.repeat.set(0.5, 0.5); // Scale down to 50%
        }
    }, [logoTexture]);

    const [isGrabbed, setIsGrabbed] = useState(false);

    useFrame(({ pointer, camera, raycaster }) => {
        if (isGrabbed && rigidBody.current) {
            const coinPhysics = rigidBody.current;

            // Cast ray from pointer to get world position
            raycaster.setFromCamera(pointer, camera);
            // Use a vertical plane that faces the camera
            const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 1);
            const targetPoint = new THREE.Vector3();
            raycaster.ray.intersectPlane(intersectPlane, targetPoint);

            const targetPos = {
                x: targetPoint.x,
                y: Math.max(targetPoint.y, 0.1),  // Keep the minimum height constraint
                z: Math.max(targetPoint.z, -0.6)  // Adjusted to match coin box position
            };

            coinPhysics.setNextKinematicTranslation(targetPos);

            // Keep the rotation logic as is
            const targetRotation = new Euler(Math.PI / 2, 0, Math.PI / 2);
            const targetQuat = new Quaternion().setFromEuler(targetRotation);

            const currentQuat = new Quaternion();
            const rot = coinPhysics.rotation();
            const quat = new Quaternion(rot.x, rot.y, rot.z, rot.w);
            currentQuat.setFromEuler(new Euler().setFromQuaternion(quat));

            currentQuat.slerp(targetQuat, 0.3); // Increased from 0.1 to 0.3 for faster rotation

            coinPhysics.setNextKinematicRotation(currentQuat);
        }
    });

    const bind = useDrag(({ down }) => {
        if (!rigidBody.current) return;
        const coinPhysics = rigidBody.current;

        if (down) {
            // Only allow grabbing if no other coin is being dragged
            if (!isAnyCoinBeingDragged || isGrabbed) {
                isAnyCoinBeingDragged = true;
                setIsGrabbed(true);
                document.body.style.cursor = 'grabbing';
                coinPhysics.setBodyType(2, true);
            }
        } else {
            if (isGrabbed) {
                isAnyCoinBeingDragged = false;
                setIsGrabbed(false);
                document.body.style.cursor = 'auto';
                coinPhysics.setBodyType(0, true);
                coinPhysics.applyImpulse({ x: 0, y: 0, z: -0.005 }, true);
            }
        }
    });

    return (
        <RigidBody
            ref={rigidBody}
            position={position}
            userData={{ type: 'coin' }}
            colliders={false}
            {...bind()}
        >
            <CylinderCollider
                args={[0.01, 0.1]}
                friction={1}
                restitution={0.1}
                frictionCombineRule={3}  // Use maximum friction when coins touch
                restitutionCombineRule={1}  // Use minimum bounciness when coins touch
            />

            <mesh
                ref={visualRef}
                castShadow
                receiveShadow
            >
                <cylinderGeometry args={[0.10, 0.10, 0.02, 16]} />
                <meshStandardMaterial
                    color="#FFD700"
                    metalness={0.8}
                    roughness={0.2}
                    emissive="#000000"
                    emissiveIntensity={0}
                    normalMap={normalMap}
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
    const texture = useLoader(TextureLoader, '/arcade_carpet_1_512.png');
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(10, 10);

    return (
        <RigidBody type="fixed" position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <CuboidCollider args={[5, 5, 0]} friction={0.9} restitution={0}>
                <mesh receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial
                        map={texture}
                        roughness={0.95}
                        metalness={0.1}
                        normalScale={[0.3, 0.3]}
                        displacementScale={0.05}
                        bumpScale={0.02}
                    />
                </mesh>
            </CuboidCollider>
        </RigidBody>
    );
}

function CoinBox({ onCoinInserted }: { onCoinInserted: () => void }) {
    const boxRef = useRef<Mesh>(null);
    const faceplateRef = useRef<Mesh>(null);
    const [isFlickering, setIsFlickering] = useState(false);
    const [lightIntensity, setLightIntensity] = useState(2);

    // Handle coin insertion with flicker effect
    const handleCoinInserted = () => {
        onCoinInserted();
        setIsFlickering(true);

        // Play coin sound
        const coinSound = new Audio('/coin.m4a');
        coinSound.play();

        // Reset flicker after 500ms
        setTimeout(() => {
            setIsFlickering(false);
        }, 500);
    };

    // Animate the light flicker
    useFrame(() => {
        if (isFlickering) {
            setLightIntensity(Math.random() * 5 + 1); // Random intensity between 1 and 6
        } else {
            setLightIntensity(2); // Default intensity
        }
    });

    const normRepeat = 1;

    const [normalMap] = useNormalTexture(
        39, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
        // second argument is texture attributes
        {
            offset: [0, 0],
            repeat: [normRepeat, normRepeat],
            anisotropy: 8
        }
    )

    useEffect(() => {
        if (!boxRef.current || !faceplateRef.current) return;

        // Create main box brush - reduced width from 0.5 to 0.3
        const mainBox = new Brush(new BoxGeometry(0.4, 0.6, 0.4));
        mainBox.updateMatrixWorld();

        // Create slot hole brush - moved to left side
        const slotHole = new Brush(new BoxGeometry(0.05, 0.3, 0.4)); // Reduced width from 0.07 to 0.05
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
        <RigidBody colliders={false} type="fixed" position={[-0.2, 0.30, -1]}>
            {/* Main box body - split into multiple colliders */}
            <group>
                {/* Right wall (shorter to allow coin viewing) */}
                <CuboidCollider
                    args={[0.12, 0.3, 0.2]}
                    position={[0.08, 0.00, 0.01]}
                    restitution={30}
                />

                {/* Left wall */}
                <CuboidCollider
                    args={[0.079, 0.18, 0.2]}
                    position={[-0.139, 0.00, 0.01]}
                    restitution={30}
                />

                {/* Top wall */}
                <CuboidCollider
                    args={[0.09, 0.05, 0.2]}
                    position={[-0.11, 0.25, 0.01]}
                    restitution={30}
                />

                {/* Bottom wall */}
                <CuboidCollider
                    args={[0.09, 0.05, 0.2]}
                    position={[-0.11, -0.25, 0.01]}
                    restitution={30}
                />

                {/* Visual meshes */}
                <mesh
                    ref={boxRef}
                    receiveShadow
                    castShadow
                >
                    <meshPhysicalMaterial
                        color="#444444"
                        roughness={0.8}
                        clearcoat={0.8}
                        clearcoatRoughness={0.2}
                        metalness={0.2}
                        normalMap={normalMap}
                    />
                </mesh>

                {/* Wire tube coming out of coin box */}
                <mesh position={[-0.15, -0.25, -0.2]}>
                    <tubeGeometry
                        args={[
                            new THREE.CatmullRomCurve3([
                                new THREE.Vector3(0, 0, 0),
                                new THREE.Vector3(0, 0, -0.1),
                                new THREE.Vector3(-0.1, 0, -0.2),
                                new THREE.Vector3(-0.3, 0, -0.2),
                                new THREE.Vector3(-0.5, 0, -0.1),
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

                {/* Aged white sticker on left side */}
                <mesh position={[0.12, -0.27, 0.201]}>
                    <planeGeometry args={[0.1, 0.032]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        roughness={0.1}
                        metalness={1}
                        opacity={0.6}
                        transparent
                        iridescence={1}
                        iridescenceIOR={2}
                        clearcoat={1}
                        transmission={0.5}
                        map={new THREE.TextureLoader().load('/mux-logo.png')}
                        emissive="#00ffff"
                        emissiveIntensity={2}
                    >
                    </meshPhysicalMaterial>
                </mesh>

                {/* Red faceplate */}
                <mesh
                    ref={faceplateRef}
                    position={[0, 0, 0.21]}
                    receiveShadow
                    castShadow
                >
                    <MeshTransmissionMaterial
                        color="#831313"
                        background={new THREE.Color("#690F0F")}
                        samples={10}
                        thickness={0.1}
                        transmission={1}
                        roughness={0}
                        resolution={2048}
                        clearcoat={1}
                        attenuationColor={"#fff"}
                    />
                </mesh>

                {/* Multiple red glow lights behind faceplate */}
                <pointLight
                    position={[-0.05, 0, 0.1]}
                    color="#ff0000"
                    intensity={lightIntensity}
                    distance={0.3}
                    decay={2}
                />
                <pointLight
                    position={[0.05, 0.1, 0.1]}
                    color="#ff0000"
                    intensity={lightIntensity * 0.7}
                    distance={0.25}
                    decay={2}
                />
                <pointLight
                    position={[0.05, -0.1, 0.1]}
                    color="#ff0000"
                    intensity={lightIntensity * 0.7}
                    distance={0.25}
                    decay={2}
                />
                {/* <pointLight
                    position={[0.1, 0.05, 0.2]}
                    color="#ff3333"
                    intensity={lightIntensity * 0.5}
                    distance={0.2}
                    decay={2}
                /> */}

                <Text
                    position={[0.04, 0.10, 0.22]}
                    fontSize={0.075}
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                    anchorY="middle"
                >
                    25
                </Text>
                <Text
                    position={[0.089, 0.083, 0.22]}
                    fontSize={0.035}
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                    anchorY="middle"
                >
                    ¢
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

            {/* Update sensor to use new handler */}
            <CuboidCollider
                args={[0.2, 0.4, 0.2]}
                position={[-0.05, .1, -1.5]}
                sensor
                onIntersectionEnter={debounce(handleCoinInserted, 200)}
            />
        </RigidBody>
    );
}

function Scene({ onCoinInserted }: { onCoinInserted: () => void }) {
    return (
        <Physics>
            <directionalLight
                position={[-2, 4, 2]}
                intensity={2.5}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-left={-5}
                shadow-camera-right={5}
                shadow-camera-top={5}
                shadow-camera-bottom={-5}
                shadow-camera-near={0.1}
                shadow-camera-far={10}
            />
            <CoinBox onCoinInserted={onCoinInserted} />
            <CoinStack />
            <Ground />
            <Environment preset="city" />
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