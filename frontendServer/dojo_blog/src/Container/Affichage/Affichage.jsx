import'./affichage.css'
import axios from "axios"



export const Affichage = ({offres}) => {



  const handleSupprimer =(_id)=>{
     axios.delete("http://localhost:5000/api/offre/supp/" +_id)
    .then(res =>{
        return Location.reload();
    }
    )
  
    .catch(err => {
      console.log(err);
    }
      
      )
  }

  return (
    <div className='offres'>
          {
            offres.map((Offres)=>{
                return(
                   <div  className="listeJob" key={Offres._id}>
                       <div className="poste">
                        <span> {Offres.name}</span>
                       </div>
                      <div className='mission'>
                      <span>Mission:</span>
                      <span>{Offres.Mission}</span>
                     </div>
                       <div className='profil'>
                     <span>Profil:</span>
                     <span> {Offres.Profil}</span>
                     </div>
                     <button onClick={()=>handleSupprimer(Offres._id)} className='suppe'>Supprimer</button>
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
                      
                    </div>              
                )
            })
          }
          </div>
  )
}
