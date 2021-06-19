import React, { useState, useEffect } from "react";

const ContactForm = (props) => {

    const initialFieldValues = {
        fullname: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleOnSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-pretend">
                        <div className="input-group-text">
                            <i className="fad fa icon-length fa-user-circle"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Full Name" name="fullname"
                        value={values.fullname} onChange={handleInputChange}></input>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-pretend">
                        <div className="input-group-text">
                            <i class="fas fa icon-length fa-mobile"></i>
                        </div>
                    </div>
                    <input type="tel" className="form-control" placeholder="Mobile No" name="mobile"
                        value={values.mobile} onChange={handleInputChange}></input>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-pretend">
                        <div className="input-group-text">
                            <i class="fas fa-at fa icon-length"></i>
                        </div>
                    </div>
                    <input type="email" className="form-control" placeholder="Email" name="email"
                        value={values.email} onChange={handleInputChange}></input>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-pretend">
                    </div>
                    <textarea className="form-control" placeholder="Address" name="address"
                        value={values.address} onChange={handleInputChange}></textarea>
                </div>
                <input type="submit" value="Save" className="btn btn-primary"></input>
            </form>

        </div>
    );
}

export default ContactForm;