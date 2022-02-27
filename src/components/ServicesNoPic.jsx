import React from 'react'

function ServicesNoPic({title, text}) {
  return (
<div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <h4 className="s-title">{title}</h4>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>  )
}

export default ServicesNoPic;