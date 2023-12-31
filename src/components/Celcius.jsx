/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 celcius.gltf --transform 
Files: celcius.gltf [9.49MB] > celcius-transformed.glb [210.96KB] (98%)
*/

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF,Text3D } from '@react-three/drei'

export default function Model({color,numero,exhibir,colorNumero,props}) {
  const bus = useRef();

  useFrame((_state,delta) => {
    if(exhibir){
      bus.current.rotation.y += delta * 1;
    }
    
  })

  const { nodes, materials } = useGLTF('/celcius-transformed.glb')
  return (
    <group {...props} dispose={null} ref={bus}>
      <Text3D position={[-0.50,3.6, 5]}  font="Inter_ExtraBold.json" size={0.5} height={0.07} type='font'  >
        {numero}
        <meshStandardMaterial color={colorNumero} toneMapped={false} />
      </Text3D>
      <mesh geometry={nodes.bodi.geometry} material={materials.Default_Material} material-color={color} />
      <mesh geometry={nodes.ban.geometry} material={nodes.ban.material}  />
    </group>
  )
}

useGLTF.preload('/celcius-transformed.glb')
