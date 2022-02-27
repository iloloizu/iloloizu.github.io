import React from 'react';

function ServicesSection({image, title, text}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h4 className="s-title">{title}</h4>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;