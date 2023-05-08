import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


import './About.css'
function About() {
    const navigate=useNavigate();
  return (
    <>
      <h1 className="title" >Welcome, Vaibhav Singh</h1>
     <div className="contain">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vaibhav</td>
            <td>singhvab@gmail.com</td>
            <td>+91-6391351122</td>
          </tr>
        </tbody>
      </table>
      <button className="butn" onClick={()=>navigate("/")}>Update</button></div>
    </>
  );
}

export default About;
