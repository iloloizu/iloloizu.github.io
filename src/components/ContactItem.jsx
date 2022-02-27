import React from 'react'

function ContactItem({icon, text, href1, text2, href2, title}) {
    
  
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt=""/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p><a href={href1} target="_blank">{text}</a></p>
                    <p><a href={href2} target="_blank">{text2}</a></p>
                
                    
                </div>
            </div>
        </div>
    )
}

export default ContactItem;