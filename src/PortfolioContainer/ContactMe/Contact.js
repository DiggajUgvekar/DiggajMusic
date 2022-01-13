import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';
export default function Contact() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_hyxmgkb','template_tihw9un',e.target,'user_s9UxsqT68Pr1F1aufRtKc').then(res=>{
          alert("Submitted Successfully");
          console.log(res);
          var frm = document.getElementsByName('contact-form')[0];
          frm.submit(); // Submit the form
          frm.reset();  // Reset all form data
          return false; // Prevent page refresh
        }).catch(err=>console.log(err));
    }
  return (
    <div className="contact-form">
        <h1>Contact</h1>
      <form onSubmit={sendEmail} name="contact-form">
      <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
       
        </div>

        
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="user-email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
       
        </div>
        <div class="form-group">
    <label for="message">Message</label>
    <textarea class="form-control" name="message" id="message" rows="3" placeholder="Enter your message"></textarea>
  </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
