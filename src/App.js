import {useReducer, useEffect} from "react";
import {Canvas} from 'react-three-fiber';
import Cube from "./Styles/Cube";
import Button from "./Styles/Button";

import {initialState, reducer} from "./reducers/cube";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {cubes, number} = state;

    useEffect(() => {
        if (number > 0 && number % 17 === 0) {
            dispatch({type: 'CUBE_17', number: number})
        }
    }, [number]);

    return (
        <>
            <Button onClick={() => dispatch({type: "ADD_CUBE"})}>
                ADD CUBE
            </Button>
            <Button primary onClick={() => dispatch({type: "SHUFFLE"})}>
                SHUFFLE CUBES
            </Button>
            <Button primary onClick={() => dispatch({type: "STOP_ODD"})}>
                RESET ANIMATION
            </Button>
            <Button primary onClick={() => dispatch({type: "CHANGE_ODD"})}>
                CHANGE ODD ANIMATION
            </Button>
            <Canvas style={{height: '100vh', width: '90vw'}} camera={{position: [0, 12, 7]}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                {cubes.length > 0 &&
                cubes.map((cube, i) =>
                    <Cube
                        key={i}
                        {...cube}
                        position={[-3 + 1.7 * (i % 7), 0, 2 - 3 * (Math.floor(i / 7))]}
                    />)
                }
            </Canvas>
        </>
    );
};

export default App;
