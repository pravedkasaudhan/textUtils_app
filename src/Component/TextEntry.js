import { useState } from "react";
import React from 'react'
// const test=()=>{
//     if(text.length==0){
//         return (

//             <p>{text.split(" ").length-1} no of words </p>
//         );
//      }
//      else{
//          return (
//              <p>{text.split(" ").length} no of words </p>
//          );
//      }
// }

export default function TextEntry(props) {
    const [text, setText] = useState("hello please enter the text");
    const convertToCapital=()=>{
        console.log("uppercase");
        let t=text.toUpperCase();
        setText(t);
        props.updateAlert("CONVERTED TO UPPERCASE" ,"success");
        
    }
    const convertToSmall=()=>{
        console.log("lowercase");
        let t=text.toLowerCase();
        setText(t);
        props.updateAlert("CONVERTED TO SMALLCASE" ,"success");
    }
    const clearText=()=>{
        console.log("clear")
        setText("");
        props.updateAlert("ENTRY CLEARED" ,"warning");
    }
    const changeText=(e)=>{
        console.log("change");
        setText(e.target.value);
    }
  
    return (
        <>
        <div className="container my-4">
            <div className="mb-3">
                <label  className={`form-label text-${props.mode==="light"?'dark':'light'}`}>ENTER THE TEXT TO BE CONVERTED</label>
                <textarea className="form-control" id="text" rows="10" value={text} onChange={changeText}  style={{backgroundColor:props.mode==="light"?'black':'pink',fontSize:"25px",color:props.mode==="light"?"white":"black"}}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={convertToCapital}>CAPITAL</button>
            <button type="button" className="btn btn-secondary mx-4" onClick={convertToSmall}>SMALL</button>
            <button type="button" className="btn btn-danger" onClick={clearText}>CLEAR</button>
            <h2 className="my-4" style={{color:props.mode==="light"?'green':'white'}}>{text.length>0?text:"Enter the text"}</h2>
            <p style={{color:props.mode==="light"?'black':'pink',fontSize:"30px"}}>{text.length} no of characters </p>
            
        </div>
        </>
    )
}
