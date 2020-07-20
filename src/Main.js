import React from 'react'
import FullName from './profile/FullName'
import ProfilePhoto from './profile/ProfilPhoto'
import Address from './profile/Adress'


function  Main() {
    return(
         <div className="container">
             <FullName />
             <ProfilePhoto />
             <Address />
         </div>  
    )
}


export default Main;
