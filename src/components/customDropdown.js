import React, { Component, Fragment } from 'react';



class CustomDropdown extends Component {

    constructor(props){
        super(props);

    }

    /*onSearchInput(evt){
        this.props.searchEventHandler(evt.target.value);
    }*/

    perPage(e) {
        var val = e.target.value;
        /*this.props.changePerPage(val,this.props.searchURL);*/
        this.props.sortEventHandler(val)
        console.log(val)
    }

    render() {

        return (
            <Fragment>
                <select onChange={this.perPage.bind(this)}>
                    {this.props.options.map((option, i) => <option key= {i} value={option}>{option}</option>)}
                </select>
            </Fragment>
        );
    }
}

export default CustomDropdown;
