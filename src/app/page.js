"use client";

import Image from "next/image"
import { useState } from "react";
import styles from "./page.module.css"


import validate from "../utils/validator";
import compressor from "../utils/compressor";

import Copy from "@/public/copy.png";
import Check from "@/public/check.png"


function Page() {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState(false);
    const [rowCount,setRowCount] = useState(0);

    const [img, setImg] = useState(Copy.src);


    function handleTextArea(e){
        setText(e.target.value)
        console.log(rowCount)
        const x = e.target.value.split('\n').length;
        setRowCount(x);

    }

    function handleValidateClick(data){
        if(data === ""){
            setMessage("");
        }else{
             const {result,commpressedData, error} = validate(data);
                if(result){
                    setText(commpressedData);
                    setMessage("Valid JSON")
                    setResult(true);
                }else{
                    const index = error.message.split(" ");
                    const [line, x] = index[index.length - 1].split(":");
                    setMessage(JSON.stringify(error.message));
                    setResult(false)
                }
        }
    }

    function handleCompressClick(){
        if(!result){
            return;
        }else{
            const dataCompressed = compressor(text);
            setText(dataCompressed.result);
        }
    }

    function handleCopyClick(){
        navigator.clipboard.writeText(text)
        .then(() => {
            setImg(Check.src);
            changeImg()
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

    function changeImg(){
        setTimeout(()=>{
            setImg(Copy.src)
        },2000)
    }
    
    return (
       <main className={styles.main}>

        <div className={styles.container}>

             <div className={styles.title_holder}>
                <p className={styles.title}>To validate you JSON, just copy + paste it below</p>
            </div>

    {/* Validator Container */}
            <div className={styles.information}> 

                <div className={styles.row_count}>
                    {Array.from({ length: rowCount }).map((_, i) => {
                        return <p key={i}>{i + 1}</p>
                    })}
                </div>

            {/* Iput TextArea */}
            <div className={styles.textarea_wrapper}>
                  <textarea className={styles.textarea}   value={text} onChange={(e)=>{handleTextArea(e)}}>
                </textarea>
                
                <button className={styles.copy_btn} onClick={handleCopyClick}> <Image src={img} alt="copy button" width={15} height={15}/> </button>
            </div>
           
           
               
            {/* END Input TextArea */}
            

                    <div className={styles.actions}>

                        <div className={styles.validate_holder}>
            {/* JSON VAlidator */}
                            <button className={styles.validate} onClick={()=>{handleValidateClick(text)}}>Validate JSON</button>

                        </div>
            {/* Clear And Compress */}
                        <div className={styles.other_actions}>

                            <button onClick={()=>{setText("")}}>Clear</button>

                            <button onClick={()=>{handleCompressClick()}} >Compress</button>

                        </div>
                        
                    </div>
             </div>
        {/* END Validator Container */}
           
           <div className={result ? styles.message_success : styles.message_failed}>
                <p>{message}</p>
           </div>
        </div>

           
       </main>
    )
}

export default Page
