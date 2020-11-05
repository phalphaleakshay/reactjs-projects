import React, { Component } from 'react';
import NewTaskForm from './NewTaskForm';
class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" title="Add new task">
                    <i className="fas fa-plus-circle"></i>
                </button>
                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <NewTaskForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTask;