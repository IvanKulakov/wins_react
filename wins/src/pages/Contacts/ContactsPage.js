import React from "react";
import ContactsMap from "./ContactsMap";
import Header from "../../components/Header/Header";
import ContactsInput from "./ContactsInput";

function ContactsPage(){
    return(
        <div>
            <Header />
            <ContactsMap />
            <ContactsInput />
        </div>
    )
}
export default ContactsPage;