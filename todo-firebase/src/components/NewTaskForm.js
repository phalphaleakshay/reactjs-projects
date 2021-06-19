import React, { useState, useEffect } from "react";
import '../style/todo.css'
import firebase from '../firebase';
import DatePicker from "react-date-picker";

const NewTaskForm = (props) => {
    const initialFieldValues = {
        summary: '',
        priority: '',
        createdDate: new Date(),
        dueDate: new Date(),
        description: ''
    }

    var date = new Date();
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        var event = e.target || {}
        var { name, value } = event
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
    }

    return (
        <div className="container-fluid jumbotron">
            <h1 class="display-4">New Task</h1>
            <p class="lead">Let's create new task</p>
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
                    <div className="form-group col-md-12">
                        <label for="description">Description</label>
                        <textarea id="description" className="form-control" placeholder="Description" name="description"
                            value={values.description} onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="dueDate">Due Date</label>
                        <DatePicker className="react-date-picker form-control"
                            value={values.dueDate}
                            name="dueDate"
                            onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="createdDate">Creating on</label>
                        <DatePicker className="react-date-picker form-control"
                            name="createdDate"
                            value={values.createdDate}
                            disabled="true"
                            onChange={handleInputChange}
                        />
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