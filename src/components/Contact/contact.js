import React,{useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const initialValue = {
    name:'',
    email:'',
    subject:'',
    text:''
  } 
  const [data, setData] = useState(initialValue);

  const onChange = (e,para)=>{
    if(para==='name'){
      setData({...data,name:e.target.value});
    }else if(para==='subject'){
      setData({...data,subject:e.target.value});
    }else if(para==='email'){
      setData({...data,email:e.target.value});
    }else if(para==='text'){
      setData({...data,text:e.target.value});
    }
  }
  const onClick = (e)=>{
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_PUBLIC_KEY)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setData(initialValue);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <div id='cont' className='main-contact'>
      <form className='contact-form'>
        <input type='text' className='contact-form-name' value={data.name} onChange={e=>onChange(e,'name')} placeholder='Name...' ></input>
        <input type='text' className='contact-form-name' value={data.subject} onChange={e=>onChange(e,'subject')} placeholder='Subject...' ></input>
        <input type='email' className='contact-form-email' value={data.email} onChange={e=>onChange(e,'email')} placeholder='Email...'></input>
        <textarea type='text' className='contact-form-text' value={data.text} onChange={e=>onChange(e,'text')} placeholder='Message...' rows={7} ></textarea>
        <button className='contact-form-btn' onClick={onClick} >SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact;