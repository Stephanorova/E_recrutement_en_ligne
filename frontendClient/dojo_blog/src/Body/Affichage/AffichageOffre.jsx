import './affichageOffre.css'
import { useHistory } from 'react-router-dom'


const AffichageOffre = ({offres}) => {
   

     const history = useHistory()

     
    
  return (
    <div className='offres'>
          {
            offres.map((Offres)=>{
                return(
                   <div  className="listeJob" key={Offres._id}>
                       <div style={{position:"relative"}}>
                        <img src="/image/offre.PNG" alt="image" width= "250px"/>
                        <span className='spane'> {Offres.name}</span>
                       </div>
                      <div className='mission'>
                      <span>Mission:</span>
                      <span>{Offres.Mission}</span>
                     </div>
                       <div className='profil'>
                     <span>Profil:</span>
                     <span> {Offres.Profil}</span>
                     </div>
                     <div className='genre_container'>
                        { Offres.Genre.map((Genre,index)=>{
                            return(
                                <p key={Genre} 
                                >
                                  {index !== Offres.Genre.length - 1 && "/" }
                                </p>
                                )
                            })
                        }

                    </div>
                     <div className="postule">
                        <button className='detaille' onClick={()=>history.push(`/login/${Offres._id}`)}>Postulé</button>
                     </div> 
                    </div>              
                )
            })
          }
          </div>
  )
}

export default AffichageOffre