import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import Ajouter from '../../Container/AJoutTeame/Ajouter'



export const PageAjouts = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <Ajouter/>
        </div>
    </div>
  )
}