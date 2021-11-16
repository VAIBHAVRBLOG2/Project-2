import React from "react";
import storage1 from "../Components/signin";
import storage2 from "./firebase";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import firebase from "@firebase/app-compat";
import db from "./firestore";
import { useForm } from 'react-hook-form';



function Upload(){

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log("success");
    } else {
      console.log("Not loged in")
    }
        
  });


    var user1 = firebase.auth().currentUser;
    if (user1 !== null) {
      var displayName = user1.displayName;
      var email = user1.email;
      var photoURL = user1.photoURL;
      const emailVerified = user1.emailVerified;
      var uid = user1.uid;
      console.log(photoURL);
        }
      else{
        }

        function upload1(){
          alert("successful update");
        }
  
    
    const [image , setImage] = useState('');
    const [name , setName] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data);
      var Firstname = data.firstName;
      var gender = data.gender;
      var phoneno1 = data.phone;
      db.collection("new1").doc(uid).set({
      first: displayName,
      email: email,
      username: Firstname,
      gender: gender,
      phoneno: phoneno1
      
      })
      .then((docRef) => {
       console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
       console.error("Error adding document: ", error);
      });
    
      upload1();

      
    }
    


    
    
    const upload = ()=>{
      if(image == null)
        return;
      storage2.ref(`/images/${image.name}`).put(image)
      .on("state_changed" , preview() , alert);
    }
  function preview(){
    storage2.ref(`/images/${image.name}`).getDownloadURL()
   .then((url) => {
    document.getElementById("img").src = url;
    alert("success");
  })}
return(
  
   <>
    <div className="card contact-form">
      <div className="contact-form-block w-form">
    <form className="contact-form-grid" onSubmit={handleSubmit(onSubmit)}>
      <img src={photoURL} className="profile_image"  />
    <label>Name:<input className="input w-input" {...register("firstName")} /> </label>
      <label>Phoneno: <input className="input w-input"  {...register("phone")} /> </label>
      <label>gender:
      <select className="input w-input" {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> </label>
      <input className="button-primary w-button"  type="submit" />
    </form> </div> </div>
     <div className="App">
      <center className="card_center">
      
        <div><img src="" className="card_image" id="img"/> </div>
      <div class="block_5"><input className="input w-input" type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button className="button-primary w-button" onClick={upload}>Upload</button></div>
      </center>
    </div>
  </>
);

}

export default Upload;