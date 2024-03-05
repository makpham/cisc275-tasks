import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isInProgress, setIsInProgress] = useState(false);

    const handleStart = () => {
        setIsInProgress(true);
        setAttempts(attempts - 1);
    };

    const handleStop = () => {
        setIsInProgress(false);
    };

    const handleMulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button
                variant="primary"
                onClick={handleStart}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                variant="secondary"
                onClick={handleStop}
                disabled={!isInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                variant="warning"
                onClick={handleMulligan}
                disabled={isInProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
