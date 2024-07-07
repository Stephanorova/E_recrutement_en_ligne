import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import Teame from '../../Container/Teame/Teame'



export const TeamePage = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <Teame/>
        </div>
    </div>
  )
}