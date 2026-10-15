import React from 'react'
import { useState } from 'react';
import cat from '../images/cat.png';
function Imagemanipulation() {

    const[catHeight, setCatHeight]= useState(200);
    const[catWidth, setCatWidth]= useState(200);
    const[catAngle, setCatAngle]= useState(30);
    const [boxMarginLeft, setBoxMarginLeft] = useState(200);

    function setHeight(){
        setCatHeight(catHeight+10);
    }
    function setWidth(){
        setCatWidth(catWidth+10);
    }
    function setAngle(){
        setCatAngle(catAngle+30);
    }
    function moveLeft(){
        setBoxMarginLeft(boxMarginLeft - 50);
    }
    function moveRight(){
        setBoxMarginLeft(boxMarginLeft + 50);
    }
    return (
        <div>
            <h2 style = {{color: 'red', backgroundColor: 'black'}}>Imagemanipulation</h2>
            <div style = {{border: '2px solid red', height: '400px', width: '400px', marginLeft: `${boxMarginLeft}px`}}>
            <img src = {cat} height = {catHeight} width ={catWidth} style={{transform: `rotate(${catAngle}deg)`}}></img>
            </div>
            <div>
                <button onClick={setHeight}>enhanceHeight</button>
                <button onClick={setWidth}>enhanceWidth</button>
                <button onClick={setAngle}>rotate</button>
                <button onClick={moveLeft}>Move Left</button>
                <button onClick={moveRight}>Move Right</button>
            </div>

        </div>

    )
}
export default Imagemanipulation