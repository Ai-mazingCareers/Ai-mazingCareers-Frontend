import { useState } from "react";
import "./style/Contact.css";
export default function Contact() {
    const [result, setResult] =  useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "db19ce8f-8470-4e2a-990e-60f3bedd68eb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="contact-wrapper">
        <div className="contact-header">{"Contact Us"}</div>
        <form onSubmit={onSubmit}>  
          <input type="text" name="name" required placeholder="Enter your name.."/><br/>
          <input type="email" name="email" required placeholder="Enter your email.."/><br/>
          <textarea name="message" required placeholder="Enter your query"></textarea><br/>
  
          <button type="submit">{"Submit"}</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }