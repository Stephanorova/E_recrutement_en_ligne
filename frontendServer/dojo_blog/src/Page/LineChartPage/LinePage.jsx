import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import ChartLine from '../../Container/Dashboard/LineChart/ChartLine'



export const LinePage = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <ChartLine/>
        </div>
    </div>
  )
}