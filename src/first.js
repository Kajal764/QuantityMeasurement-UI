import React, { Component } from "react";
import Unit1 from "../src/unit1";
import Axios from "axios";
import { getFilterList } from "./configuration/configuration";

class first extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      myArray: [],
      measurements: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.Unit1 = React.createRef();
  }

  componentWillMount() {
    Axios.get("http://localhost:8080/mainunit").then(result => {
      this.setState({ measurements: result.data });
      var firstVal = this.state.measurements[0];
      getFilterList(firstVal).then(result => {
        console.log("in getFilter list response is --->", result.data);
        this.setState({
          myArray: result.data
        });
      });
    });
  }

  handleChange = async event => {
    await this.setState({ value: event.target.value });
    await getFilterList(this.state.value).then(result => {
      this.setState({
        myArray: result.data
      });
    });
   
    this.Unit1.current.updateUnit(this.state.myArray[0]);
  };

  render() {
    let unitType = this.state.measurements.map((value, index) => {
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
          {unitType}
        </select>
        {<Unit1 ref={this.Unit1} value={this.state.myArray} />}
      </div>
    );
  }
}
export default first;
