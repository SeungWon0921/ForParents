import React, { useState } from "react";
import './NoticeContainer.css'
import { NoticeData } from "../../Data/Notice";



const NoticeContainer = () =>{
    const [detail,setDetail] = useState(false) 
    const [popup,setPopup] =useState(false)
    
    const onPOpup = () => {
        setPopup(!popup);
    }

    return(
        <div className="popup">
            <input type="button" value="get data" onclick ={
                function(){
                    fetch('/test.php').then(function(response){
                        return response.json();
                    })
                    .then(function(json){console.log(json);})
                }.bind(this)
            }></input>
        </div>
    )
}

export default NoticeContainer;