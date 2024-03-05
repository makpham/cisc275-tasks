import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const initialLeft = d6();
    let initialRight;
    do {
        initialRight = d6();
    } while (initialRight === initialLeft);

    const [leftDie, setLeftDie] = useState(initialLeft);
    const [rightDie, setRightDie] = useState(initialRight);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            {leftDie === rightDie && leftDie === 1 && <p>You Lose</p>}
            {leftDie === rightDie && leftDie !== 1 && <p>You Win</p>}
        </div>
    );
}
