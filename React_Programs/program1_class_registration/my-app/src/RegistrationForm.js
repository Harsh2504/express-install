import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      submitted: false
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
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

        {/* Display submitted data on screen */}
        {this.state.submitted && (
          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              border: "2px solid green",
              backgroundColor: "#d4edda",
              borderRadius: "5px"
            }}
          >
            <h3 style={{ color: "green" }}>✓ Registration Successful!</h3>
            <p>
              <strong>Name:</strong> {this.state.name}
            </p>
            <p>
              <strong>Email:</strong> {this.state.email}
            </p>
            <p>
              <strong>Password:</strong> {this.state.password}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default RegistrationForm;
