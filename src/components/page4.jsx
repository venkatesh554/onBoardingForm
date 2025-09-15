import React from 'react'
import "../styles/page4.css"
import { useNavigate } from 'react-router-dom'
export default function page4() {
    const navigate=useNavigate();
    const Submit=()=>{
        alert("Submit Successfully")
        navigate("/")
    }
  return (
    <div className="div11">
        <div className="div22">
            <h1>Future Invo Solutions</h1>
            <h3>Terms & Conditions</h3>
        </div>
        <p id="p11">1.By Uploading Documents and entering your details, you agree that the information provided is true and the accurate.</p>
        <p id="p11">2.Your details and documents will be used only for registration ,verification and service purpose.</p>
        <p id="p11">3.We do not share your information with third parties unless required by law.</p>
        <p id="p11">4.Your are responsible for the documents you upload and confirm they belong to you.</p>
        <p id="p11">5.We take responsible care to Protect your data,but you accept that no system is 100% secure.</p>
        <input type="checkbox" id="check"></input><h3 id="h3">I Agree to These Terms & Conditions</h3>
        <button id="sub" onClick={Submit}>Submit</button>
    </div>
  )
}
