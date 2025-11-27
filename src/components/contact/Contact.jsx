import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import ph_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arr from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const contactApiKey = import.meta.env.VITE_CONTACT_APIKEY;
    formData.append("access_key", contactApiKey);

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
    <div className='contact'>
      <div className="contact-col">
        <h3>Send a Message <img src={msg} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio deserunt nisi iure omnis dolore nemo sint rem est culpa itaque! Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          <li><img src={mail_icon} alt="" />kapilchandra9648@gmail.com</li>        
          <li><img src={ph_icon} alt="" />+919648631601</li>        
          <li><img src={loc_icon} alt="" />Uttar Pradesh, Gonda 271603 <br/>India</li>        
        </ul>
      </div>
      <div className="contact-col">
          <form onSubmit={onSubmit}>
             <label htmlFor="name">Your name</label>     
             <input type="text" name="name" id="name" placeholder='Enter your name' required/>
             <label htmlFor="phone">Phone Number</label>
             <input type="tel" name="phone" pattern="[0-9]{10}" placeholder='Enter your phone number' id='phone' required/>
             <label htmlFor="message">Write your meassage here</label>
             <textarea name="message" id="message" rows='6' placeholder='Enter your message...' required></textarea>
             <button type="submit" className='btn dark-btn'>Submit now <img src={white_arr} alt="" /></button>
          </form>
            <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
