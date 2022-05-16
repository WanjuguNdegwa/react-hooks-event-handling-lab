// Code Keypad Component Here
import React from "react";

function Keypad () {
    function keypadPress() {
        console.log('Entering password...');
    }

    return (
        <div>
            <input
            type = "password"
            onChange = {keypadPress}
            />
        </div>
    )
};


export default Keypad;