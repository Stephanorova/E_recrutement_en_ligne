import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import { Ajouter } from '../../Container/Ajout Offre/Ajouter'

export const PageAjout = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pageAjout">
           <Ajouter/> 
        </div>
    </div>
  )
}
