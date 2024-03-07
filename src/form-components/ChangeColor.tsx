import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Pink",
        "Orange",
        "Black"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                    {color}
                </label>
            ))}
            <div
                style={{ backgroundColor: selectedColor }}
                data-testid="colored-box"
            >
                {selectedColor}
            </div>
        </div>
    );
}
