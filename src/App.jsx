import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Center, Environment,OrbitControls,Text3D,Text, CameraControls } from '@react-three/drei'
import { useControls } from 'leva'


import Celcius from "./components/Celcius"

function App() {

  const {color,numero, colorNumero,exhibir} = useControls({
    color: '#000000',
    numero: "21",
    colorNumero: '#ffffff',
    exhibir: false
  })
  
  return (
    <div style={{width:'100%',height:'100vh'}} >
      <Canvas camera={{zoom:1, position:[5,5,5],fov:80,far:2000}} shadows gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={null}>
          <Center top>
              {/* <Text3D position={[-0.50,3.6, 5]}  font="Inter_ExtraBold.json" size={0.5} height={0.07} type='font'  >
                {numero}
                <meshStandardMaterial color={colorNumero} toneMapped={false} />
              </Text3D> */}
            <Celcius rotation-y={2} color={color} numero={numero} colorNumero={colorNumero} exhibir={exhibir} />
          </Center>
          <Environment preset="city" background blur={1} />
          <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
