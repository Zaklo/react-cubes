import React, {useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {Html} from 'drei';

const Cube = ({w, h, color, number, cube_17, stop, animation, position}) => {
    const mesh = useRef()

    useFrame(() => {
        if (!stop) {
            mesh.current.rotation.x = mesh.current.rotation.y += animation
        }
    })

    return (
        <>
            <mesh
                position={position}
                ref={mesh}
            >
                {!cube_17 ? <boxBufferGeometry args={[w, h]}/> : <sphereBufferGeometry args={[0.8, 32, 32]}/>}
                <meshStandardMaterial color={color}/>

                <Html scaleFactor={10}>
                    <div style={{marginTop: '100px'}}>
                        {number}
                    </div>
                </Html>
            </mesh>
        </>
    )
}

export default Cube;
