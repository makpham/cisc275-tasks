import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setIsEditMode(!isEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={handleSwitchChange}
                />
                Edit Mode
            </label>
            {isEditMode ? (
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleCheckboxChange}
                        />
                        Is a student
                    </label>
                </form>
            ) : (
                <p>
                    {name} is {isStudent ? "" : "not "}a student
                </p>
            )}
        </div>
    );
}
