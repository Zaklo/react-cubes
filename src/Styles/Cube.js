import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'


const Cube = ({w, h, color, r, number, easter_eggs, stop}) => {
    const mesh = useRef()


    useFrame(() => {
        if (!stop) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            ref={mesh}>
            <boxBufferGeometry args={[w, h, 1]}/>
            <meshStandardMaterial color={color}/>
        </mesh>

    )
}

export default Cube;
