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
                SHUFFLE
            </Button>
            <Button primary onClick={() => dispatch({type: "STOP_ODD"})}>
                STOP ODD NUMBER
            </Button>
            <Button primary onClick={() => dispatch({type: "START_ODD"})}>
                START ODD NUMBER
            </Button>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {cubes.length > 0 &&
                cubes.map((cube, i) => <Cube key={i} {...cube}/>)}
            </Canvas>
        </>
    );
};

export default App;
