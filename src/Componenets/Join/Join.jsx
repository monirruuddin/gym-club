import React,{useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

function Join() {
    const form= useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zuz5ytd', 'template_k02s8f5', form.current, 'c2uV9JbSgkHLj9qL0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div className='join'>
        <div className="lJoin">
            <div>
                <span className='strokeText'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='strokeText'> WITH US?</span>
            </div>
        </div>

        <div className="rJoin">
           <form useref={form} className='emailContainer' onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter Your Mail'/>
                <button className='btn btnJoin'>Join Now</button>
           </form>
        </div>
    </div>
  )
}

export default Join