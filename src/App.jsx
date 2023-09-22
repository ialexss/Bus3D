import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,OrbitControls } from '@react-three/drei'


import Celcius from "./components/Celcius"

function App() {

  return (
    <div style={{width:'100%',height:'90vh'}} >
      <Canvas camera={{zoom:1, position:[5,5,5],fov:80,far:2000}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={null}>
          <Celcius />
          <Environment preset="city" background blur={0.9} />
          <OrbitControls/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
