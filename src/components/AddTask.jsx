import React, { Component } from "react";

class AddTask extends Component {
  state = {
    newText: "",
  };
  handelChange = (e) => this.setState({ newText: e.target.value });
  handleSumbit = (e) => {
    e.preventDefault();
    this.props.add(this.state.newText);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          <h1>Our to do App</h1>
          <input
            type="text"
            value={this.state.newText}
            onChange={this.handelChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
