import React, { useState } from "react";


function Userprofile(){
    const [light,setLight] = useState("Thanmai");

const handlechange=(e)=>{
    setLight(e.target.value);
}
    return(
        <>
        <h1>Name:{light}</h1>
        <input type="text" placeholder="type your name here" value={light} onChange={handlechange}/>
   
        </>
    )
}

export default Userprofile;