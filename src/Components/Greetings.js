import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [randomBool, setRandomBool] = useState(false);

    const buttonHandler = () => {
        setRandomBool(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            { randomBool && <Output>It's my pleasure</Output> }
            { !randomBool && <p>It's not good to see you</p> }
            <button onClick={buttonHandler}>Hit me </button>
        </div>
    )
};

export default Greeting;
