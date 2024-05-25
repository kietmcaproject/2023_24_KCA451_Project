import React from 'react'

function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "31245aeb-94ff-4ff6-a1c7-3284a04338a5");
  
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
      <div className='flex flex-col items-center justify-center gap-y-3'>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder='Name' className=' flex bg-slate-600 rounded-md mt-3 p-3 border border-white text-white' name="name" required/>
          <input type="email" placeholder='Your Email' className=' flex bg-slate-600 rounded-md mt-2 p-3 text-white' name="email" required/>
          <textarea name="message" placeholder='Message'  className='bg-slate-600 rounded-md mt-2 p-3 text-white' required/>
      <div className=' flex items-center justify-center'>
          <button className=' flex bg-yellow-800 text-white p-4 rounded-2xl items-center justify-center' type="submit">Submit Form</button>
          </div>
        </form>
        <span>{result}</span>
  
      </div>
    );
}

export default ContactForm
