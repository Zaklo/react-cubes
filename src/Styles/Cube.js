import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'


const Cube = (props) => {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color='hotpink'/>
        </mesh>
    )
}

export default Cube;
