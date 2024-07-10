import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import View from '../../Container/View/View'



export const PageView = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <View/>
        </div>
    </div>
  )
}