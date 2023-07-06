import React, { useState } from 'react';
import '../../styles/square.css';


const Square = () => {


    const [bgColor, setBgColor] = useState([0,0,0]);
    const [intervalID, setIntervalID] = useState();

    function randomInteger(){
        return Math.floor(Math.random() * 255);
    }

    function startAnimation() {
        let animationID = setInterval(() => {
            setBgColor([randomInteger(), randomInteger(), randomInteger()]);
        }, 500);

        setIntervalID(animationID);

    }

    function stopAnimation(){
        clearInterval(intervalID);
    }


    return (
        <div 
        onPointerEnter={startAnimation} 
        onDoubleClick={stopAnimation} 
        onPointerLeave={stopAnimation} 
        className='square'
        style={{backgroundColor: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`}} >
        </div>
    );
}

export default Square;
