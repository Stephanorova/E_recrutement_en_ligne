import React from 'react'
import NaveBar from '../../NaveBare/NaveBar'
import { List } from '../../Container/ListeOffre/List'


export const PageList = () => {
  return (
    <div style={{display:"flex"}}>
        <NaveBar/>
        <div className="pag">
            <List/>
        </div>
    </div>
  )
}
