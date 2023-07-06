import "./App.css"
import { Canvas } from "@react-three/fiber"
import { Environment, Loader, OrbitControls } from "@react-three/drei"
import { Table } from "./components/Table"
import { Books } from "./components/Books"
import { Paper } from "./components/Paper"
import { College } from "./components/College"
import { useState } from "react"
import Courses from "./components/Courses"
import About from "./components/About"
import Resume from "./components/Resume"

export default function App() {
  const cameraPosition = [-2, -145, -5]; // Set the desired camera position
  const targetPosition = [0, -149, 0]; // Set the target position to look at
  const [page, setPage] = useState("home")

  return (
    <>
      { page === "courses" && <Courses setPage={setPage} /> }
      { page === "about"   && <About   setPage={setPage} /> }
      { page === "resume"  && <Resume  setPage={setPage} /> }
      { page === "home"    && (
        <>
        <Canvas camera={{ position: cameraPosition }} shadows>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Table />
          <Books   setPage={setPage}  />
          <College setPage={setPage}  />
          <Paper   setPage={setPage}  />
          <Environment files="studio.hdr" background />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            target={targetPosition} 
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
        <Loader />
        </>
      )}
    </>
  );
}

