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
                STOP ALL CUBES
            </Button>
            <Button primary onClick={() => dispatch({type: "CHANGE_ODD"})}>
                CHANGE ODD
            </Button>
            <Canvas style={{height: '100vh', width: '90vw'}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                {cubes.length > 0 &&
                cubes.map((cube, i) => <Cube key={i} {...cube} />)
                }
            </Canvas>
        </>
    );
};

export default App;
