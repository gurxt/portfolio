import "./App.css"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Table } from "./components/Table"
import { Books } from "./components/Books"
import { Paper } from "./components/Paper"
import { College } from "./components/College"

export default function App() {
  const cameraPosition = [-2, -145, -5]; // Set the desired camera position
  const targetPosition = [0, -149, 0]; // Set the target position to look at

  return (
    <Canvas camera={{ position: cameraPosition }} shadows>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Table />
      <Books />
      <College />
      <Paper />
      <Environment files="studio.hdr" background />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        target={targetPosition} 
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

