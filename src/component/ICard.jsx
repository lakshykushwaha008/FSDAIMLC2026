import React from 'react'

function ICard({data}) {
   
  return (
    <div style={{border:'10px solid red', height:'300px', width:'300px', marginTop:'100px'}}>
        <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
    <img src={data.pic} height={50} width={50}></img>
    <h3>Roll:{data.roll}</h3>
    <h3>Name:{data.name}</h3>
    <h3>Branch:{data.branch}</h3>
      {/* <h2 style={{color:'red'}}>Welcome to React using Vite</h2> */}
      

    </div>
  )
}

export default ICard