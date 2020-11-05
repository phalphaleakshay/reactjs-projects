import React, { Component } from 'react';

class Dropdown extends Component {

    render() {
        return (
            <div>
                <label class="mr-sm-2 sr-only" for="groupBy">Preference</label>
                <select class="custom-select mr-sm-2" id="groupBy">
                    <option selected>Group By</option>
                    <option value="priority">Priority</option>
                    <option value="createdOn">Created On</option>
                    <option value="dueBy">Due By</option>
                </select>
            </div>
        );
    }
}

export default Dropdown;