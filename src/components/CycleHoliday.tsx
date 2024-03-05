import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎏" | "🎃" | "🧧" | "🎄" | "🎂";

const holidaysByYear: Holiday[] = ["🧧", "🎏", "🎂", "🎃", "🎄"];
const holidaysByAlphabet: Holiday[] = ["🎂", "🎄", "🎃", "🎏", "🧧"];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🧧");

    const advanceByYear = () => {
        const index = holidaysByYear.indexOf(currentHoliday);
        setCurrentHoliday(holidaysByYear[(index + 1) % holidaysByYear.length]);
    };

    const advanceByAlphabet = () => {
        const index = holidaysByAlphabet.indexOf(currentHoliday);
        setCurrentHoliday(
            holidaysByAlphabet[(index + 1) % holidaysByAlphabet.length]
        );
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={advanceByYear}>Advance by Year</Button>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
        </div>
    );
}
