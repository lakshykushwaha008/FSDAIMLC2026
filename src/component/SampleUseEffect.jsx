import React,{useState,useEffect} from 'react'

function SampleUseEffect(){
    const[counter,setCounter]=useState(0);
    const [pointer,setPointer]=useState(100)
    useEffect(()=>{
       // console.log("Hey....using useEffect")
       console.log("Counter="+counter)
    },[counter])
   
function setCount(){
    setCounter(counter+5);
}
function setPointerValue(){
    setPointer(pointer-5);
}

  return (
    <div>
        <h2 style={({color:"brown"})}>SampleUseEffect</h2>
        <h1>Counter Value={counter}</h1>
        <h1>Pointer Value={pointer}</h1>
       
<button 
    onClick={setCount} 
    style={{backgroundColor: "green", color: "white"}}
>
    Counter
</button>

<button 
    onClick={setPointerValue} 
    style={{backgroundColor: "blue", color: "white"}}
>
    Pointer
</button>

    </div>
  )
}

export default SampleUseEffect