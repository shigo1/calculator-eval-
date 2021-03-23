import React, { Component } from "react";

class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  handleClickButton = () =>{
     
    this.props.handleClick(this.props.children)
  }
 
 
  render() {
    return (
      <div
        id={this.props.id}
        className={`button ${
          this.isOperator(this.props.children) ? "" : "operator"
        }`}
        onClick={this.handleClickButton  }
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
