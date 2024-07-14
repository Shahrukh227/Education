import React from 'react'
import "./Contact.css"
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb062da0-4156-4399-b465-1fa753f21d04");

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
    <div className='contact' name="Contact">
      <div className="contact-col">
        <h3>Send us a message <FaMessage className='msg'/></h3>
        <p>Feel free to reach out through conatct form or find our contact information below. Your feedback , questions , and suggestions are important to us as we strive to provide an exceptional service to our university community.</p>

        <ul>
          <li><MdEmail />Contact@Outlook.com</li>
          <li><IoCall />+1 123-456-7890</li>
          <li><FaLocationDot />77 Massachusette Ave, Cambridge states.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name </label>
          <input type="text" name="name" placeholder='Enter name' required />
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile num' required/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn2'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
