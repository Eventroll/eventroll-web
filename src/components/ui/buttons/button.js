import React, {Component} from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        evt.stopPropagation();
        if (this.props.onClick) {
            this.props.onClick(evt);
            return;
        }
        throw new Error("Please pass on click handler function...")
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.props.className}> {this.props.buttonName} </button>
        )
    }
}
