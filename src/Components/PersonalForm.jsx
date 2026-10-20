import "./PersonalForm.css";
import { useState } from "react";


function PersonalForm() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    function handleBtn() {
        console.log(name, email, phone);
    }
  return (
    <div className="form-side">
        <h1>Personal info</h1>
        <p className="desc">Please provide your name, email address, and phone number.</p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="e.g. stephenking" 
        value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="text" placeholder="e.g. stephenking@lorem.com"
         value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" placeholder="e.g. +1 234 567 890" 
         value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button className="btn" onClick={handleBtn}>Next Step</button>
    </div>
  )
}

export default PersonalForm;