import { useRef, useState } from 'react';
import './contact.css'
import {useHistory} from "react-router-dom"
import emailjs from '@emailjs/browser'
import {toast} from "react-toastify"

const Contact = () => {

  const [saisir,setSaisire] = useState({
    nom: '',
    email : '',
    message: '',
 })

 const form = useRef();
 const history = useHistory()


 const sendEmail = (e)=>{
   e.preventDefault()
   const send =  emailjs.sendForm('service_5vthth8','template_ljwm4ba' ,form.current,'-j8EWZPX-ELv_LlmQ')
   .then(result => console.log(result.text))
   .catch(error =>console.log(error.text))
  
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
   

   
}


  return (
    <form className="contacte" onSubmit={sendEmail}>
        <input type="text" placeholder='votre nom' onChange={(e)=>setSaisire({...saisir, nom: e.target.value})} />
        <input type="email" placeholder='votre adresse email' onChange={(e)=>setSaisire({...saisir, email: e.target.value})}/>
        <textarea type="text" placeholder='message ...' onChange={(e)=>setSaisire({...saisir, message: e.target.value})}/>
        <button>Envoyer</button>
    </form>
  )
}

export default Contact