import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import Bartchart from '../../Container/Dashboard/chartBar/Bartchart'



export const ChartBare = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <Bartchart/>
        </div>
    </div>
  )
}