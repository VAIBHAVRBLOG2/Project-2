import React from "react";
import storage1 from "../Components/signin";
import storage2 from "./firebase";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css";


function Upload(){
    const [image , setImage] = useState('');
    const upload = ()=>{
      if(image == null)
        return;
      storage2.ref(`/images/${image.name}`).put(image)
      .on("state_changed" , preview() , alert) }
  function preview(){
    storage2.ref(`/images/${image.name}`).getDownloadURL()
   .then((url) => {
    document.getElementById("img").src = url;
    alert("success");
  })}
return(
  <Card>
    <div className="App">
      <center className="card_center">
        <img src="" className="card_image" id="img"/>
      <input className="card_input" type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button className="button-3" onClick={upload}>Upload</button>
      </center>
    </div>
  </Card>
);

}
export default Upload;