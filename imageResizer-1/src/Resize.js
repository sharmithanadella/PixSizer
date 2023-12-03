
import React from 'react';
// import JSZip from "jszip";
// import { saveAs } from "file-saver";
import {useRef,useState} from 'react';
import cloud from './cloud.png'


export default function Resize() {

  const inputRef = useRef(null);
  const [file1, setFile] = useState("");

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  // const onZip = () => {
  //   const zip = new JSZip();
  //   const files = Array.from(files);

  //   files.forEach((file) => {
  //     console.log(file)
  //     zip.file(file.webkitRelativePath, file);
  //   });
  //   zip
  //     .generateAsync({ type: "blob" })
  //     .then(function (content) {
  //       saveAs(content, "files.zip");

  //       const formData = new FormData();
  //       formData.append("folderzip", content);
  //       console.log("ready to send to server", content);
  //     })
  //     .catch((e) => console.log(e));
  // };
  
  const fileChange = async (e) => {
      const file = e.target.files[0]; 
      if(!file) return; 
      const files = e.target.files;
      setFile(files);
      document.querySelector(".wrapper").classList.add("active");
      
  }

  const sourceChange = async () => {

    const uploadBox = document.querySelector(".upload-box");
    let previewImg = uploadBox.querySelector(".img");
  

    for(let i=0;i<file1.length;i++){
      previewImg.src = URL.createObjectURL(file1[i]);  
      await delay(100);
      resize();
     
    }
    
  }

  const resize = (e) => {
      const canvas = document.createElement("canvas");
      const a = document.createElement("a");
      const ctx = canvas.getContext("2d");
      const uploadBox = document.querySelector(".upload-box");
      let previewImg = uploadBox.querySelector(".img");
      const widthInput = document.querySelector(".width input"); 
      const heightInput = document.querySelector(".height input");
      canvas.width = widthInput.value;
      canvas.height = heightInput.value;

      ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
      a.href = canvas.toDataURL("image/jpeg");
      
      a.download = new Date().getTime(); 
      a.click();
      return;
  }

  

    return (
      <div>
        <div className='d-flex justify-content-center p-5 '>
         <div className=" rectangle upload-box">
    
            
         
          
            
          <input className='input' onChange={fileChange} type="file" webkitdirectory="" directory="" accept="image/*" style={{height:50}}/>
       
          <h6 >Or</h6>
          <img className='img' src={cloud} alt="" style={{width:120}}/>
          <p >Drag&Drop images</p>
          </div>
         
      </div>
      <div className="wrapper d-flex justify-content-around">
      <div className="row d-flex justify-content-around">
        <div className="col">
      <div className="column width">
        <label className='fs-5 text' style={{fontVariant:"small-caps"}}>Width:</label>
      <input type="number" />
      </div>
      </div>
      <div className="col">
      <div className="column height">
        <label htmlFor="" className='fs-5 text' style={{fontVariant:"small-caps"}}>Height:</label>
      <input type="number" />
      </div>
      </div>
    
      <div className="col">
          <button className="download-btn btn btn-warning btn-lg" onClick={sourceChange} style={{marginTop:20,fontVariant:"small-caps"}}>Resize</button>
       
          </div>
          </div>
          </div>  
          </div>
             
         
        
          
     
         
    
    
      );
}

