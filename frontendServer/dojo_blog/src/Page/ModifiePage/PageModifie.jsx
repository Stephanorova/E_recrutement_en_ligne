import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import Update from '../../Container/Modification/Modifie'



export const PageModifie = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <Update/>
        </div>
    </div>
  )
}