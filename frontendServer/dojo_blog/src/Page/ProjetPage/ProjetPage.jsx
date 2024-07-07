import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import ListeProjet from '../../Container/ListeProjet/ListeProjet'



export const ProjetPage = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <ListeProjet/>
        </div>
    </div>
  )
}