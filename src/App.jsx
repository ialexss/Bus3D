import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Center, Environment,OrbitControls,Text3D,Text } from '@react-three/drei'
import { useControls } from 'leva'


import Celcius from "./components/Celcius"

function App() {

  const {color,numero, colorNumero} = useControls({
    color: '#000000',
    numero: "21",
    colorNumero: '#ffffff'
  })

  return (
    <div style={{width:'100%',height:'100vh'}} >
      <Canvas camera={{zoom:1, position:[5,5,5],fov:80,far:2000}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={null}>
          <Center top>
              <Text3D position={[-0.50,3.6, 5]}  font="Inter_ExtraBold.json" size={0.5} height={0.07} type='font'  >
                {numero}
                <meshStandardMaterial color={colorNumero} toneMapped={false} />
              </Text3D>
            <Celcius color={color} />
          </Center>
          <Environment preset="city" background blur={1} />
          <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
