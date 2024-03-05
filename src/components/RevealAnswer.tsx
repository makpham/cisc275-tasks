import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleClick}>
                Reveal Answer
            </Button>
            {isVisible && <p>42</p>}
        </div>
    );
}
