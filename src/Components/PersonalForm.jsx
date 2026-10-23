import "./PersonalForm.css";
import { useState } from "react";


function PersonalForm() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[isEmployee, setIsEmployee] = useState(false);
    const[isMale, setIsMale] = useState(true);
   

    function handleBtn() {
        console.log(name, email, phone, isEmployee, isMale);
    }
  return (
    <div className="form-side">
        <h1 className="font-bold text-4xl">Personal info</h1>
        <p className="desc">Please provide your name, email address, and phone number.</p>
        <label className="font-semibold" htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="e.g. stephenking" 
        value={name} onChange={(e) => setName(e.target.value)}/>
        <label className="font-semibold" htmlFor="email">Email Address</label>
        <input id="email" type="text" placeholder="e.g. stephenking@lorem.com"
         value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="font-semibold" htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" placeholder="e.g. +1 234 567 890" 
         value={phone} onChange={(e) => setPhone(e.target.value)}/>
         
        <div className="flex items-center gap-2 mb-5 self-start align-middle"> 
            <input className="w-auto mb-0 cursor-pointer translate-y-1.5" id="employee"
             type="checkbox" checked={isEmployee} 
             onChange={(e) => setIsEmployee(e.target.checked)}/>
        
         <label htmlFor="employee" className="mb-0 cursor-pointer flex whitespace-nowrap text-sm font-bold text-[#022959] leading-none"> Is Employee</label>
         </div>
      <div className="flex gap-0.5">
          <div className="flex items-center gap-2 mb-5 self-start align-middle"> 
            <input name="gender" className="w-auto mb-0 cursor-pointer translate-y-1.5" id="female"
             type="radio" checked={isMale === true} 
             onChange={() => setIsMale(true)}/>
        
         <label htmlFor="" className="mb-0 cursor-pointer flex whitespace-nowrap text-sm font-bold text-[#022959] leading-none"> Male</label>
         </div>
        <div className="flex items-center gap-2 mb-5 self-start align-middle"> 
            <input name="gender" className="w-auto mb-0 cursor-pointer translate-y-1.5" id="female"
             type="radio" checked={isMale === false} 
             onChange={() =>setIsMale(false)}/>
        
         <label htmlFor="" className="mb-0 cursor-pointer flex whitespace-nowrap text-sm font-bold text-[#022959] leading-none"> Female</label>
         </div>
      </div>

        <button className="btn" onClick={handleBtn}>Next Step</button>
    </div>
  )

}

export default PersonalForm;