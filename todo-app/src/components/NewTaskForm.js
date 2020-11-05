import React, { useState, useEffect } from "react";
import '../style/todo.css'
import firebase from '../firebase';

const NewTaskForm = (props) => {
    const initialFieldValues = {
        summary: '',
        priority: '',
        createdDate: '',
        dueDate: '',
        description: ''
    }

    var date = new Date();
    var today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    var [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleDateChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleOnSubmit = e => {
        firebase.child('todo-app').push(
            values,
            err => {
                if (err) {
                    alert(err);
                }
            }
        )
        alert('selected value' + values.priority)
    }

    return (
        <div className="container">
            <form autoComplete="off" onSubmit={handleOnSubmit}>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label className="text-align-left" for="summary">Summary</label>
                        <input id="summary" type="text" className="form-control" placeholder="Summary" name="summary"
                            value={values.summary} onChange={handleInputChange}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="priority">Priority</label>
                        <select class="custom-select my-1 mr-sm-2" id="priority" onChange={handleInputChange} name="priority" value={values.priority}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label for="dueDate">Due Date</label>
                        <input type="date" id="dueDate" className="form-control" placeholder="Due Date" name="dueDate"
                            value={values.dueDate} onChange={handleDateChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="dueDate">Due Date</label>
                        <input type="date" id="dueDate" className="form-control" placeholder="Due Date" name="dueDate"
                            value={values.dueDate} onChange={handleDateChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="description">Description</label>
                        <textarea id="description" className="form-control" placeholder="Description" name="description"
                            value={values.description} onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value="Save" className="btn btn-primary"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewTaskForm;