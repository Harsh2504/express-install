import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Registration Successful!\nName: ${this.state.name}\nEmail: ${this.state.email}`
    );
  };

  render() {
    return (
      <div style={{ width: "400px", margin: "auto", paddingTop: "40px" }}>
        <h2>Registration Form (Class Component)</h2>

        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit">Register Now</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
