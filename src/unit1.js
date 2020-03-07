import React, { Component } from "react";
import "./App.css";
import configuration from "./configuration/configuration";

class unit1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit1: this.props.value[0],
      unit2: this.props.value[0],
      text1: 0,
      text2: 0
    };
  }

  unit1Value = event => {
    this.setState({ unit1: event.target.value });

    console.log("fvghbjnmk", unit1);
  };

  unit2Value = event => {
    this.setState({ unit2: event.target.value });
  };

  text1Value = async event => {
    await this.setState({
      text1: event.target.value
    });
  };


  getconversion = event => {
    this.setState{
      text1:
    }
    configuration(this.state.text1, this.state.unit1, this.state.unit2).then(
      result => {
        console.log("response ", result.data.convertedValue);
        this.setState({
          text2: result.data.convertedValue
          
        });
      }
    );
  };

  render() {
    const unit = this.props.value.map((value, index) => {
      return <option key={index}>{value}</option>;
    });

    return (
      <div>
        <div className="firstNext">
          <input
            id="firsttext"
            placeholder="unit"
            value={this.state.text1}
            onChange={this.text1Value}
          ></input>

          <input
            id="secondtext"
            placeholder="unit"
            value={this.state.text2}
            // onChange={this.text2Value}
          ></input>
        </div>

        <div>
          <select
            id="firstUnit"
            name="unit"
            value={this.state.unit1}
            onChange={this.unit1Value}
          >
            {unit}
          </select>

          <select
            id="secondUnit"
            name="unit"
            value={this.state.unit2}
            onChange={this.unit2Value}
          >
            {unit}
          </select>
        </div>

        <div className="button">
          <button type="button" onClick={this.getconversion}>
            Convert To
          </button>
        </div>
      </div>
    );
  }
}

export default unit1;
