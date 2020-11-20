import React, {useRef, useState} from 'react'
import {useFrame} from 'react-three-fiber'
import {cube_17} from "../actions/actions-types";


const Cube = ({w, h, color, r, number, easter_eggs, stop, animation, position}) => {
    const mesh = useRef()


    useFrame(() => {
        if (!stop) {
            mesh.current.rotation.x = mesh.current.rotation.y += animation
        }
    })

    return (
        <mesh
            ref={mesh}
            position={[(number * 2 % 20 - 10), 5 - Math.floor(number / 10) * 2, -5]}
        >
            <boxBufferGeometry args={[w, h,]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}

export default Cube;
