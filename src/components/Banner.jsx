import React from "react";

const Banner=(props)=>{
    return(
        <>
        <div className="pb-5">
        <h2 className="d-flex justify-content-center p-4" style={{color:'white', fontFamily:'Source Sans Pro', background: 'linear-gradient(to right, #000f20, #00354c, #005e73, #008b8b, #07b893)'}}>{props.title}</h2>
        </div>
        </>
    )
}

export default Banner;