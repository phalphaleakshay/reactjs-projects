import React, { Component } from 'react';

class SearchHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <form className="form-inline" autoComplete="off" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Task" aria-label="Search" />
                    <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default SearchHandler;