import React, { Component } from "react";
import "./clock.css";

const scaleNames = {
  c: "celsius",
  f: "farenheit",
};
const toCelsius = (farenheit) => {
  return ((farenheit - 32) * 5) / 9;
};
const toFarenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
class TempInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
   this.props.onTempChange(e.target.value)
  }
  render() {
    const { temp } = this.props;
    const name = "scale" + this.props.scale;
    const scaleName = scaleNames[this.props.scale];
    console.log(this.props);
    return (
      <div>
        <label htmlFor={name}>Température ({scaleName})</label>
        <input
          type="text"
          id={name}
          name={name}
          value={temp}
          onChange={this.handleChange}
          className="form-control"
        />
      </div>
    );
  }
}
const BoilingVerdict = ({ celsius }) => {
  return (
    <div className="temp">
      {celsius > 100 ? (
        <p className="bout"> L'eau bout à {celsius}° </p>
      ) : (
        <p className="boutpas"> L'eau ne bout pas encore à {celsius || 0}° </p>
      )}
    </div>
  );
};

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 20 };
    // this.handleTempChange = this.handleTempChange.bind(this);
  }
    handleTempChange = (temperature) => {
        this.setState({ temperature });
        console.log(this.state, temperature)
  };

  render() {
    const { temperature } = this.state;
    const celsius = temperature;
    const farenheit = toFarenheit(celsius);
    return (
      <div>
        <TempInput
          scale="c"
          temp={celsius}
          onTempChange={(e)=>this.handleTempChange(e)}
        />
        <TempInput scale="f" temp={farenheit} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
