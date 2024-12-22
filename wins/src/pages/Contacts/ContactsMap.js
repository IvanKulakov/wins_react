import React from "react";
import "./Contacts.scss"

function ContactsMap(){
    return(
        <div>
                <iframe className="contacts_map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325519.57561698504!2d30.2030538496179!3d50.401569780757896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1734823772963!5m2!1suk!2sua"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                </iframe>
        </div>
    )
}

export default ContactsMap;