import React, { Component } from "react";
import "./clock.css";
export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }
  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
    });
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>bonjour vous</h1>
        <p>{this.state.date.toLocaleString()}</p>
      </div>
    );
  }
}
export const Video = ({ name, id }) => {
  return (
    <div className="clock">
      <h1>{name}</h1>
      <iframe
        title={`${name}`}
        className="lect"
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullcreen=""
        sandbox=" allow-scripts  allow-same-origin "
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1`}
      ></iframe>
    </div>
  );
};

export class Incrementeur extends Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start, timer: null };
  }
  componentDidMount() {
    this.play();
  }
  componentWillUnmount() {
    this.pause();
  }
  increment() {
    this.setState((state, props) => ({ n: state.n + props.step }));
    
  }
  pause() {
    window.clearInterval(this.state.timer);
    this.setState({ timer: null });
  }
  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }
  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }
  label() {
    return this.state.timer ? "pause" : "start";
  }
  reset() {
    window.clearInterval(this.state.timer);
    this.setState({ n: this.props.start, timer: null });
  }
  render() {
    return (
      <div className="inc">
        valeur : {this.state.n}
        <button onClick={() => this.toggle()}> {this.label()}</button>
        <button onClick={() => this.reset()}> Reset</button>
      </div>
    );
  }
}
Incrementeur.defaultProps = { start: 5, step: 1 };
