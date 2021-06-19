import React, { Component } from 'react';
import Dropdown from './Dropdown';
import NewTask from './NewTask';
import SearchHandler from './SearchHandler';
import TaskLists from './TaskLists';
class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <Dropdown className="col-sm-3" />
                    <SearchHandler className="col-sm-3" />
                    <NewTask className="col-sm-2" />
                    <div className="col-sm-2"></div>
                </div><br />
                <div class="container">
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col-8">
                            <TaskLists className="col" />
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ToDo;