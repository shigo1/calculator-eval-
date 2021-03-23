import React, { Component } from 'react';

class ClearButton extends Component {
    render() {
        return (
            <div id={this.props.id} className="clear" onClick={this.props.handleClear}>
                {this.props.children}
            </div>
        );
    }
}

export default ClearButton;
