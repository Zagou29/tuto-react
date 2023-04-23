import React, { Component } from "react";
import "./clock.css";

const Field = ({ name, value, onChange,  children }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        id={name}
        data-form-type="other"
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        required
      />
    </div>
  );
};
const Checkbox = ({ name, value, onChange, children }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        id={name}
        data-form-type="other"
        name={name}
        checked={value}
        onChange={onChange}
        className="form-check-input"
        required
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

export class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prénom: "",
      news: false,
    };
    
  }
  handleChange(e) {
    /* si le type de target = checkbox, value =checked(true/false), sinon valeur champ texte */
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    /* [nom du champ : nom/prenom/newsletter] */
    this.setState({ [e.target.name]: value });
  }
  handleSubmit(e) {
    e.preventDefault()
    const data = JSON.stringify(this.state)
    console.log(data)
    this.setState({
      nom: "",
      prénom: "",
      news: false,
    });
  }
  render() {
    return (
      <form className="form" onSubmit={(e)=>this.handleSubmit(e)}>
        <Field
          name="nom"
          value={this.state.nom}
          onChange={(e) => this.handleChange(e)}
        >
          Votre nom
        </Field>
        <Field
          name="prénom"
          value={this.state.prénom}
          onChange={(e) => this.handleChange(e)}
        >
          Votre prénom
        </Field>
        <Checkbox
          name="news"
          value={this.state.news}
          onChange={(e) => this.handleChange(e)}
        >
          S'abonner à Newsletter ?
        </Checkbox>
        <button className = "bouton">envoyer</button>
        <p className="h3"> {this.state.news ? " c'est fait" : null}</p>
        {/* <p className="h3">{JSON.stringify(this.state)}</p> */}
      </form>
    );
  }
}
