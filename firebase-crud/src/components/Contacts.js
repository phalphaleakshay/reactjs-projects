import React from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
const Contacts = () => {

    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if (err) {
                    console.log(err);
                }
            }
        )
    }
    return (
        <>
            <div className="jumbotron">
                <h1 class="display-4">Contact Register</h1>
                <p class="lead">This is the portal to store contacts.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <ContactForm
                        addOrEdit={addOrEdit} />
                </div>
                <div className="col-4">
                    List of Contacts
                </div>
            </div>
        </>

    );
}

export default Contacts;