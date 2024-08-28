import'./fichier.css'
import {useHistory} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import StarIcons from "@mui/icons-material/Star"
import PersonIcons from "@mui/icons-material/Person"
import AccessAlarmsIcons from "@mui/icons-material/AccessAlarms"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Abandoner } from '../ReduxSlice/authSlice'
import {toast}  from 'react-toastify'
import axios from 'axios'




function Fichier() {

  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setEmailData({
      ...emailData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('to', emailData.to);
    formData.append('subject', emailData.subject);
    formData.append('text', emailData.text);
    formData.append('file', emailData.file);
    try {
      const response = await axios.post('http://localhost:5000/api/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


 
  const history = useHistory()
  const dispach = useDispatch()

  const auth = useSelector(state => state.auth)
  console.log(auth);

 const deconnexion = ()=>{
     if (auth._id) {
       dispach(Abandoner(null))
       history.push("/login/_id")
       toast.warning("vous-etes abandonner",{
        position:"bottom-left"
       })
     }
 }
  
    const settings = {
      dots:true,
      infinite:true,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      appendDots:(dots)=>{
        return <ul style={{margin:"0px"}}>{dots}</ul>
      }
    }
  return (
    <div className='touteFichier'>
    
    <div className='fichier'>
    <span className='nomUtulisateur'> <nave>Bonjour monsieur  </nave><span style={{fontSize:"25px"}}>{auth.Nom}</span>,</span>
        <h5 style={{fontSize:"15px"}}>remplir le formulaire et envoyer votre cv</h5>
      <div >
         <form onSubmit={handleSubmit} className='forme'>
          <div className="classput">
          <label>Email :</label>
          <input type="email" name="to" value={emailData.to} onChange={handleChange} required />
          <label>Objet:</label>
          <input type="text" name="subject" value={emailData.subject} onChange={handleChange} required />
          <label>Message:</label>
          <textarea name="text" value={emailData.text} onChange={handleChange} required></textarea>
    
        </div>
        <div>
          <label>Importer cv :</label>
          <input type="file" accept=".pdf" onChange={handleFileChange} required />
        </div>
        <div className="buutton">
        <button type="submit"
         style={{width:"90px",
         height:"30px",
         border:"none", 
         backgroundColor:"blue", 
         color:"white", 
         borderRadius:"10px",fontSize:"13px",cursor:"pointer"}}
        >Envoyer</button>
        <button style={{width:"90px",
         height:"30px",
         border:"none", 
         backgroundColor:"tomato", 
         color:"white", 
         borderRadius:"10px",fontSize:"13px",cursor:"pointer"}}
         onClick={()=>deconnexion()}
         >Abandonner</button>
       </div>
        </form>
     </div> 
      
       
    </div>
    <div className="leftFichier">
    <div className="description">
        <Slider {...settings}>
             <div className='image'>
              <img src="/image/annonce.png" alt="rova" style={{width:"90%", padding:"5px",border:"none",borderRadius:"10px",objectFit:"cover", marginRight:"30px",height:"200px"}}/>
             </div>
             <div className='image'>
             <img src="/image/lieux.png" alt="Bionexx" style={{width:"90%", padding:"5px",border:"none",borderRadius:"10px",objectFit:"cover", marginRight:"30px",height:"200px"}} />
             </div>
        </Slider>
         <div className="annonce">
          <span><StarIcons/></span>
          <span >TOP ANNONCES</span>
         </div>
        <hr style={{width:"330px",margin:"10px 0 0 0",color:"tomato"}} />
        <div className="language">
          <span style={{fontSize:"14px",fontFamily:"initial"}}>Développeur: </span>
          <span style={{fontSize:"12px",fontFamily:"initial", marginLeft:"80px"}}>- React js - Node Js</span>
          <span style={{fontSize:"12px",fontFamily:"initial",marginLeft:"80px"}}>- PHP</span>
          <hr style={{width:"180px", color:"rgb(247, 247, 247)"}}/>
        </div>
        <div className="joursPostul">
          <span><AccessAlarmsIcons/></span>
          <span>JOUR POUR POSTULER</span>
         </div>
        <hr style={{width:"330px",margin:"10px 0 0 0",color:"tomato"}} />
        <div className="language">
        <span style={{fontSize:"14px",fontFamily:"initial"}}>Tous les jours </span>
          <span style={{fontSize:"12px",fontFamily:"initial", marginLeft:"80px"}}>Date: janvier - Décembre 2023</span>
          <span style={{fontSize:"12px",fontFamily:"initial",marginLeft:"80px",color:"rgb(155, 233, 38)",fontWeight:"bold"}}>Développeur</span>
          <hr style={{width:"180px", color:"rgb(247, 247, 247)"}}/>
        </div>
        
          
        <div className="joursPostul" style={{marginTop:"5px"}}>
          <span><PersonIcons/></span>
          <span style={{marginRight:"30px"}}>SERVICE DU LKMC</span>
         </div>
        <hr style={{width:"330px",margin:"10px 0 0 0",color:"tomato"}} />
        <div className="service">
           <div className='recruteur'>Recruteur</div>
           <div style={{display:"flex"}}>
           <div className="vertical"/>
           <div style={{display:"flex", flexDirection:"column",padding:"5px",gap:"0.5rem"}}>
            <span className='descrit'>Diffusion des offre d'emploi</span>
            <span className='descrit'>Plateforme unique pour la gestion des candidats</span>
            <span className='descrit'>Consultation des profils des candidats</span>
           </div>
           </div>
           <div className='candidat'>Candidat</div>
           <div style={{display:"flex"}}>
           <div className="vertical1"/>
           <div style={{display:"flex", flexDirection:"column",padding:"5px",gap:"0.5rem"}}>
            <span className='descrit'>Consultation parmi une large offre d'emploi</span>
            <span className='descrit'>Postuler en ligne avec votre CV personnel</span>
           </div>
           </div>
        </div>
        
      </div>
    </div>
    
    </div>
  )
}

export default Fichier