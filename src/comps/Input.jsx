import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div id={this.props.id} className="screen">
                {this.props.children}
            </div>
        );
    }
}

export default Input;
