import React, { Component } from "react";
import "./clock.css";
export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
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
      <div className="clock">
        <h1>{this.props.nom}</h1>

        <p>{this.state.date.toLocaleString()}</p>
        <iframe
          title="This is a unique title" 
          class="lect"
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          sandbox=" allow-scripts  allow-same-origin "
          src="https://www.youtube-nocookie.com/embed/kfcoLj1gl0w?rel=0&amp;modestbranding=1"
        ></iframe>
      </div>
    );
  }
}
export function Home({name,adresse}) {
    return <div>
        <h1>Bonjour { name}</h1>
        <Clock nom={adresse} />
    </div>
}
