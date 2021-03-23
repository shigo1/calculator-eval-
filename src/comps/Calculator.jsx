import React from "react";
import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevNum: "",
      currNum: "0",
      operator: "",
    };
  }

  handleClick = (e) => {
    if (this.state.currNum === "0" && e === "0") {
      return;
    } else if (this.state.currNum === "0" && e !== "0") {
      this.setState({ currNum: e });
    } else if (this.state.currNum !== "0") {
      this.setState({ currNum: this.state.currNum + e });
    }
  };

  handlePoint = (e) => {
    if (this.state.currNum.indexOf(".") === -1) {
      this.setState({ currNum: this.state.currNum + e });
    }
  };

  handleClear = () => {
 
    this.setState({ prevNum: "" });
    this.setState({ currNum: "0" });
    this.setState({ operator: "" });
  };

  add = () => {
    this.setState({ operator: "+" });

    this.setState({ currNum: this.state.currNum + "+" });
  };

  minus = () => {
    this.setState({ currNum: this.state.currNum + "-" });

    this.setState({ operator: "-" });
  };

  multiply = () => {
    this.setState({ currNum: this.state.currNum + "*" });

    this.setState({ operator: "*" });
  };

  divide = () => {
    this.setState({ currNum: this.state.currNum + "/" });

    this.setState({ operator: "/" });
  };

  handleEvaluate = () => {
    this.setState({ prevNum: eval(this.state.currNum) });
    this.setState({ currNum: "0" });

    //this code was for a manual evaluation
    // if (this.state.operator === "+") {
    //   this.setState({
    //     input: parseInt(this.state.prevNum) + parseInt(this.state.currNum),
    //   });
    // } else if (this.state.operator === "-") {
    //   this.setState({
    //     input: parseInt(this.state.prevNum) - parseInt(this.state.currNum),
    //   });
    // } else if (this.state.operator === "*") {
    //   this.setState({
    //     input: parseInt(this.state.prevNum) * parseInt(this.state.currNum),
    //   });
    // } else if (this.state.operator === "/") {
    //   this.setState({
    //     input: parseInt(this.state.prevNum) / parseInt(this.state.currNum),
    //   });
    // }
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className='row   '
          >
            <Input id="display">{this.state.prevNum}</Input>
            <Input id='display'>{this.state.currNum}</Input>
          </div>

          <div className='row'>
            <Button id='seven' handleClick={this.handleClick}>
              7
            </Button>
            <Button id='eight' handleClick={this.handleClick}>
              8
            </Button>
            <Button id='nine' handleClick={this.handleClick}>
              9
            </Button>
            <Button id='multiply' handleClick={this.multiply}>
              *
            </Button>
          </div>
          <div className='row'>
            <Button id='four' handleClick={this.handleClick}>
              4
            </Button>
            <Button id='five' handleClick={this.handleClick}>
              5
            </Button>
            <Button id='six' handleClick={this.handleClick}>
              6
            </Button>
            <Button id='divide' handleClick={this.divide}>
              /
            </Button>
          </div>
          <div className='row'>
            <Button id='one' handleClick={this.handleClick}>
              1
            </Button>
            <Button id='two' handleClick={this.handleClick}>
              2
            </Button>
            <Button id='three' handleClick={this.handleClick}>
              3
            </Button>
            <Button id='add' handleClick={this.add}>
              +
            </Button>
          </div>
          <div className='row'>
            <Button id='decimal' handleClick={this.handlePoint}>
              .
            </Button>

            <Button
              id='zero'
              handleClick={this.handleClick}
              state={this.state.input}
            >
              0
            </Button>

            <Button id='equals' handleClick={this.handleEvaluate}>
              =
            </Button>

            <Button id='subtract' handleClick={this.minus}>
              -
            </Button>
          </div>
          <div className='row'>
            <ClearButton id='clear' handleClear={this.handleClear}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
