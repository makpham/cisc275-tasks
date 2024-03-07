import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGivenAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={givenAnswer} onChange={handleChange} />
            {givenAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
