import React from 'react'
import ContactItem from '../components/ContactItem';
import phone from '../images/phone.png';
import email from '../images/mail.png';
import location from '../images/google-maps.png';
import Title from '../components/Title';

function ContactPage() {

    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                {window.innerWidth > 490 ? 
                <div className="map-sect">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111026.140636397!2d-95.70933874205896!3d29.58720246896246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640de10e11b70cb%3A0x2779e11b2263d8cc!2sSugar%20Land%2C%20TX!5e0!3m2!1sen!2sus!4v1645308102312!5m2!1sen!2sus" width="640" height="480" width="600" height="450" zoom="11" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"/>
                </div>
                : "" }
                <div className="contact-sect">
                    <ContactItem className="contact" icon={phone}  href1={'tel:8176820158'} text={'(817) 682-0158'} title={'Cell Phone'}/>
                    <ContactItem className="contact" icon={email} href1={'mailto: iloloizu97@gmail.com'} text={'iloloizu97@gmail.com'} title={'Email'}/>
                    <ContactItem  className="contact" icon={location} text={'Sugar Land, TX,'} text2={'United States'} title={'Location'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;