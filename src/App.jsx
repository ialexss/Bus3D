import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Center, Environment ,OrbitControls,Stage, SoftShadows} from '@react-three/drei'
import { useControls } from 'leva'

import MicroMod from './components/MicroMod'

function App() {

  const {color,numero,abrir, cerrar, avanzar,retroceder,linea,linea2,girar} = useControls({
    color: "#e2d5d5",
    numero: "74",
    linea: "#930000",
    linea2:"#060072",
    avanzar: false,
    retroceder: false,
    abrir: false,
    cerrar: true,
    girar: {
      value: 0,
      min: -10,
      max: 10,
      step: 1,
    },
  })
  
  return (
    <div style={{width:'100%',height:'100vh'}} >
      <Canvas camera={{zoom:1, position:[10,5,-10],fov:80,far:2000}} shadows gl={{preserveDrawingBuffer:true,}}>
          <Suspense fallback={null}>
            <Center top>
              <SoftShadows />
              <MicroMod color={color} numero={numero} linea={linea} linea2={linea2} abrir={abrir} cerrar={cerrar} girar={girar} avanzar={avanzar} retroceder={retroceder}/>
            </Center>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
          </Suspense>
          <Environment preset='city' background blur={0.8}/>
      </Canvas>
    </div>
  )
}

export default App
