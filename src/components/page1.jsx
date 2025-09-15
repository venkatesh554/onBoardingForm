import React, { useState } from 'react';
import '../styles/page1.css';
import img2 from "./img2.jpg";
import {useNavigate} from 'react-router-dom';
import Page2 from "./page2"

export default function Page1() {
    const navigate=useNavigate();
       

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");

    
    const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
    const isValidMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
    const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidAddress = (address) => address.trim() !== '';
    const isValidDob = (dob) => dob !== '';

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidName(name)) {
            alert("Please enter a valid name (letters and spaces only).");
            return;
        }
        if (!isValidMobile(mobile)) {
            alert("Please enter a valid mobile number (10 digits starting with 6-9).");
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!isValidDob(dob)) {
            alert("Please enter a valid date of birth.");
            return;
        }
        if (!isValidAddress(address)) {
            alert("Please enter a valid address.");
            return;
        }
            

        const storeName=localStorage.getItem("name");
        const storeMobile=localStorage.getItem("mobile");
        const storeEmail=localStorage.getItem("email");
        const storeDob=localStorage.getItem("dob");
        const storeAddress=localStorage.getItem("address");

        if(name===storeName && mobile ===storeMobile && email ===storeEmail && dob=== storeDob && address===storeAddress){
            alert("you have already submitted the form");
            return;
        }


       
        const userData = {
            name,
            mobile,
            email,
            dob,
            address
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Form submitted successfully!");

        // Clear the fields
        setName('');
        setMobile('');
        setEmail('');
        setDob('');
        setAddress('');
            navigate("/Page2")
    };

    return (
        <div className="parent">
            <div className="child" id="left-child">
                <h1>Future Invo Solutions</h1>
                <p>Employee OnBoarding Form</p>
                <form onSubmit={handleSubmit}>
                    <label>Full Name <span>*</span>:</label><br />
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />

                    <label>Mobile Number <span>*</span>:</label><br />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    /><br />

                    <label>Email Address <span>*</span>:</label><br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <label>Date of Birth <span>*</span>:</label><br />
                    <input
                        type="date"
                        name="dob"
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    /><br />

                    <label>Address <span>*</span>:</label><br />
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    /><br />

                    <button type="submit" onClick={Page2} >Submit</button>
                </form>
                <div className="right-image">
                    <img src={img2} alt="form illustration" />
                </div>
            </div>
        </div>
    );
}
