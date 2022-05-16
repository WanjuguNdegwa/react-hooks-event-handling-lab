// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    function whenFocused () {
        console.log('Good!');
    }
   
    function whenBlurred () {
        console.log ('Hey! Eyes on me!');
    }

    return (
        <button onFocus={whenFocused} onBlur={whenBlurred} >
        Eyes on me
        </button> 
    );
};

export default EyesOnMe;