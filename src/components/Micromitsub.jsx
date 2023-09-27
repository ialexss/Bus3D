/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 micromitsub.glb 
*/

import React, { useRef } from 'react'
import {AccumulativeShadows, RandomizedLight, useGLTF,Text3D,Text  } from '@react-three/drei'

export default function Model({color,numero,linea,linea2,girar,avanzar,retroceder,props}) {
  const { nodes, materials } = useGLTF('/micromitsub.glb')
  return (
    <group castShadow receiveShadow {...props} dispose={null}>
      <Text position={[0.3,2.2,-6.85]} rotation={[0,-Math.PI,0]}  font="Inter_ExtraBold.json" fontSize={0.8} type='font'  >
        {numero}
        <meshStandardMaterial color={linea2} toneMapped={true} />
      </Text>
      <Text position={[-3,1.8,-1.3]} rotation={[0,-Math.PI/2,0]} font="Inter_ExtraBold.json" fontSize={1}>
        {numero}
        <meshStandardMaterial color={linea2} toneMapped={false} />
      </Text>
      <Text position={[3.15,1.8,-3.2]} rotation={[0,Math.PI/2,0]}  font="Inter_ExtraBold.json" fontSize={0.5}>
        {numero}
        <meshStandardMaterial color={linea2} toneMapped={true} />
      </Text>
      <mesh castShadow geometry={nodes.Chasis.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Cortinas.geometry} material={materials['Material.011']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Chasis_piso.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Mecanismo_del_cinturon.geometry} material={materials.Tapiz} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Cinturon_de_seguridad.geometry} material={materials.accesorios} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Cinturon_Hebilla.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Luces_de_posicion.geometry} material={materials['Material.006']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Luces_interiores.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Aro_de_repuesto.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Hacientos.geometry} material={materials.Interior} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Chasis_piso_interior.geometry} material={materials.Piso} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Carroceria_interior.geometry} material={materials.Tapiz} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Puntos_de_la_cabina.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Visera_parasol.geometry} material={materials.Tapiz} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.ParaPuertas.geometry} material={materials.Piso} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_17nr004.geometry} material={materials.Tapiz} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_17nr005.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_17nr006.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_17nr007.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Guardabarros.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Marco_delantero.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Vidrio_delantero.geometry} material={materials.Glass} position={[0.06, -1.232, 3.08]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_18nr003.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Llantas.geometry} material={materials['Llantas.002']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.tubo_de_escape.geometry} material={materials['Material.007']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow geometry={nodes.mesh_0_20nr.geometry} material={materials.exterior} material-color={color}  />
        <mesh castShadow geometry={nodes.mesh_0_20nr_1.geometry} material={materials.exterior} material-color={color}  />
      </group>
      <mesh castShadow geometry={nodes.Vidrio_trasero.geometry} material={materials.Glass} material-color={"ff000000FF"} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr002.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr003.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr005.geometry} material={materials['Material.003']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr006.geometry} material={materials['Material.003']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Defensa_delantera.geometry} material={materials.exteriorbajo} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr008.geometry} material={materials.focos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr009.geometry} material={materials['exterior.001']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr010.geometry} material={materials.exteriorbajo} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr011.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr012.geometry} material={materials['Material.001']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Rejilla_delantera.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr014.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Ventana_copiloto.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Ventana_izquierda.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr017.geometry} material={materials['exterior.001']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Manija_trasera.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Marco_trasero.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.LimpiaParabrisa.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr021_mesh_0_20nr022.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr022_mesh_0_20nr023.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Agaramanos.geometry} material={materials.Piso} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr024_mesh_0_20nr025.geometry} material={materials.accesorios} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Ventanas_derechas.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr026_mesh_0_20nr027.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow geometry={nodes.mesh_0_20nr027_mesh_0_20nr028.geometry} material={materials['exterior.001']} material-color={color} />
        <mesh castShadow geometry={nodes.mesh_0_20nr027_mesh_0_20nr028_1.geometry} material={materials.exteriorbajo} material-color={color} />
      </group>
      <mesh castShadow geometry={nodes.Manija_de_la_puerta.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr029.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr030.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr031.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr032.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Ventana_Piloto.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Puerta_interior.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.mesh_0_20nr051.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow geometry={nodes.mesh_0_20nr269.geometry} material={materials['exterior.001']} material-color={color} />
        <mesh castShadow geometry={nodes.mesh_0_20nr269_1.geometry} material={materials.exterior} material-color={color} />
      </group>
      <mesh castShadow geometry={nodes.Aros_de_las_llantas.geometry} material={materials['Material.007']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Caja_de_cambios.geometry} material={materials.accesorios} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Logotipo_Marca.geometry} material={materials.marca} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Luces_de_direccion.geometry} material={materials['Material.006']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Luces_traseras.geometry} material={materials['Material.012']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Luces_delanteras.geometry} material={materials.focos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Motor.geometry} material={materials['Material.001']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Volante.geometry} material={materials.volante} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Retrovisores.geometry} material={materials.espejos} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Retrovisor_central.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Retrovisor_derecho.geometry} material={materials.Llantas} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Retrovisor_izquierdo.geometry} material={materials['Material.007']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Tablero.geometry} material={materials.Tapiz} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Vidrios_pasajeros1.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Vidrios_pasajeros2.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Vidrios_pasajeros3.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Vidrios_central.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Vidrios_piloto_copiloto.geometry} material={materials.Glass} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.Plane005.geometry} material={materials['exterior.001']} position={[0, -1.207, 3.082]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.linea.geometry} material={materials.lineas1} position={[3.123, 2.066, 7.361]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.089, -1, -6.148]}  />
      <mesh castShadow geometry={nodes.linea001.geometry} material={materials.lineas1} position={[3.123, 2.356, 7.361]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.089, -1, -6.148]} material-color={linea} />
      <mesh castShadow geometry={nodes.linea002.geometry} material={materials.lineas1} position={[3.123, 1.679, 11.782]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.089, -1, -1.225]} />
      <mesh castShadow geometry={nodes.linea003.geometry} material={materials.lineas1} position={[3.123, 1.37, 11.782]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.089, -1, -1.225]} />
      <mesh castShadow geometry={nodes.linea004.geometry} material={materials.lineas1} position={[3.123, 1.732, 4.724]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.089, -1, -1.225]} />

      <mesh castShadow geometry={nodes.linea005.geometry} material={materials.lineas2} position={[3.167, 0.834, 11.782]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.164, -1, -1.619]} material-color={linea2} />
      <mesh castShadow geometry={nodes.linea006.geometry} material={materials.lineas2} position={[3.167, 0.834, 4.511]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.164, -1, -1.619]} material-color={linea2} />
      <mesh castShadow geometry={nodes.Cubo.geometry} material={materials.Cuadro} position={[1.123, 3.543, -5.961]} rotation={[Math.PI, 0, 0]} scale={[1.616, 1.224, 0.015]} />
      <mesh castShadow geometry={nodes.linea007.geometry} material={materials.lineas2} position={[-2.943, 0.754, 4.07]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.185, -1, -1.619]} />
      <mesh castShadow geometry={nodes.linea008.geometry} material={materials.lineas2} position={[-2.943, 0.754, 11.341]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.185, -1, -1.619]} />
      <mesh castShadow geometry={nodes.linea009.geometry} material={materials.lineas1} position={[-2.964, 1.653, 4.283]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.089, -1, -1.225]} />
      <mesh castShadow geometry={nodes.linea010.geometry} material={materials.lineas1} position={[-2.973, 1.291, 11.341]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.089, -1, -1.225]} />
      <mesh castShadow geometry={nodes.linea011.geometry} material={materials.lineas1} position={[-2.965, 1.6, 11.341]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.089, -1, -1.225]} />
      <mesh castShadow geometry={nodes.linea012.geometry} material={materials.lineas1} position={[-2.948, 2.277, 6.92]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.089, -1, -6.148]} />
      <mesh castShadow geometry={nodes.linea013.geometry} material={materials.lineas1} position={[-2.955, 1.987, 6.92]} rotation={[-Math.PI, 0, -1.545]} scale={[-0.089, -1, -6.148]} />
    </group>
  )
}

useGLTF.preload('/micromitsub.glb')
