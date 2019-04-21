import React, { Component, PropTypes } from 'react';

import { FormInput } from 'components';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class NewPlayerForm extends Component {
  static propTypes = {
    playerName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = { nameInput: '' }

  onChangeHandler = (event) => {
    this.setState({ nameInput: event.target.value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(capitalizeFirstLetter(this.state.nameInput));
    this.clearForm();
  }

  clearForm = () => {
    this.setState({ nameInput: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <FormInput
          type="text"
          className="form-control"
          onChange={this.onChangeHandler}
          value={this.state.nameInput}
          placeholder="Your Satoshis Games username here"
          base
        />&nbsp;&nbsp;
        <input className="btn btn-secondary startt" type="submit" value="START" />
        <style>{"\
                .startt{\
                  cursor: pointer;\
                }\
              "}</style>
      </form>
    );
  }
}
