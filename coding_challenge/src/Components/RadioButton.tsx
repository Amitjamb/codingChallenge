// App.tsx
import React, { useState } from "react";
import "./styles.scss";

export interface radioProps {
    value: string;
    id: string;
    name: string;
    label: string;
}

export interface payload {
    payload: radioProps[];
}

const RadioButton = (props: payload) => {
    // The selected drink
    const [selectedDrink, setSelectedDrink] = useState<String>();

    // This function will be triggered when a radio button is selected
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDrink(event.target.value);
    };

    return (
        <div>
            <fieldset style={{"display": "flex","justifyContent":"space-evenly"}}>
                {/* <legend>Please select your most favorite drink?</legend> */}
                {
                    props.payload.map((radioProps: radioProps) => {
                        return (
                            <p key={radioProps.id}>
                                <input
                                    type="radio"
                                    name={radioProps.name}
                                    value={radioProps.value}
                                    id={radioProps.id}
                                    onChange={radioHandler}
                                    key={radioProps.id}
                                    checked={selectedDrink === radioProps.value}
                                />
                                <label htmlFor={radioProps.id}>{radioProps.label}</label>
                            </p>
                        )
                    })
                }
            </fieldset>

            {/* Display the selected drink */}
            {selectedDrink && <h2>{selectedDrink}</h2>}
        </div>
    );
};

export default RadioButton;