import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Center, Environment ,OrbitControls,Stage, SoftShadows} from '@react-three/drei'
import { useControls } from 'leva'

import Micro from "./components/Micro"
import Model from './components/Micromitsub'

function App() {

  const {color,numero,avanzar,retroceder,linea,linea2,girar} = useControls({
    color: "#e2d5d5",
    numero: "75",
    linea: "#060072",
    linea2:"#930000",
    avanzar: false,
    retroceder: false,
    girar: {
      value: 0,
      min: -10,
      max: 10,
      step: 1,
    },
  })
  
  return (
    <div style={{width:'100%',height:'100vh'}} >
      <Canvas camera={{zoom:1, position:[5,2,5],fov:80,far:2000}} shadows gl={{preserveDrawingBuffer:true,}}>
          <Suspense fallback={null}>
            <Center top>
              <SoftShadows />
              <Model color={color} numero={numero} linea={linea} linea2={linea2} girar={girar} avanzar={avanzar} retroceder={retroceder} />
            </Center>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
          </Suspense>
          <Environment preset='sunset' background blur={0.5}/>
      </Canvas>
    </div>
  )
}

export default App
