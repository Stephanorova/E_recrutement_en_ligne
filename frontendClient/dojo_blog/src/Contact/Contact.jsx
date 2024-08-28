import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"

const Contact = () => {


 const history = useHistory()


//  const sendEmail = (e)=>{
//    e.preventDefault()
//    const send =  emailjs.send('service_5vthth8','template_ljwm4ba' ,form.current,'sbNyubN8SHXxyMf1J')
//    .then(result => console.log(result.text))
//    .catch(error =>console.log(error.text))
  
//      if (send) {
//        history.push("/")
//        toast.success("message bien envoyer",{
//        position:"bottom-left"
//      })
//      } else{
//        toast.error("erreur de connexion",{
//          position:"bottom-left"
//      })
//    }
   

   
// }
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

 const send = emailjs.sendForm('service_nh2adad', 'template_gpwikq3', form.current, 'JbClY1svJ_fyd4NQ7'
    )
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    if (send) {
             history.push("/")
             toast.success("message bien envoyer",{
             position:"bottom-left"
          })
           } else{
             toast.error("erreur de connexion",{
               position:"bottom-left"
            })
        }
};

  return (
    // <form ref={form} className="contacte" onSubmit={sendEmail}>
    //     <input type="text" name='user_name' placeholder='votre nom' required />
    //     <input type="email" name='user_email' placeholder='votre adresse email' required/>
    //     <textarea type="text" name='message' placeholder='message ...' required/>
    //     <button>Envoyer</button>
    // </form>
  <form ref={form} onSubmit={sendEmail}  className="contacte"> 
    <input type="text" name="user_name" placeholder='votre nom' />
    <input type="email" name="user_email" placeholder='votre adresse email'/>
    <textarea name="message" placeholder='message ...'/>
    <button>Envoyer</button>
  </form>
  )
}

export default Contact