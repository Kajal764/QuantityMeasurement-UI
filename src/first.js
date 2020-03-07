import React, { Component } from "react";
import Unit1 from "../src/unit1";
import Axios from "axios";

const measurements = [
  {
    Length: ["CENTIMETER",  "YARD", "INCH", "FEET"],
    Mass: ["KILOGRAM", "GRAM", "TONNE"],
    Temperature: ["CELCIUS", " FARHANHIT"],
    Volume: ["LITRE", "GALLON", "MILILITRE"]
  }
];

class first extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      unitValues: "",
      myArray: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const key = Object.keys(measurements[0]);

    var arr = [];
    for (var i = 0; i < measurements[0][key[0]].length; i++) {
      var val = measurements[0][key[0]][i];
      arr.push(val);
    }

    this.setState({ myArray: arr });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    measurements.map((value, index) => {
      return this.setState({
        myArray: value[event.target.value]
      });
    });
  }

  render() {
    const key = Object.keys(measurements[0]);

    const listItems = key.map((value, index) => {
      return <option key={index}>{value}</option>;
    });

    return (
      <div>
        <select
          className="firstSelector"
          id="unitsdropdown"
          name="unit"
          value={this.state.values}
          onChange={this.handleChange}
        >
          {listItems}) }
        </select>
        {<Unit1 value={this.state.myArray} />}
      </div>
    );
  }
}
export default first;
