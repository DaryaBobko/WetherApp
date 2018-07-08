import React, { Component } from 'react';
import './Select.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,

    }
  }

  onFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  onBlur = () => {
    this.setState({
      isFocused: false,
    });
  }

  render() {
    const {  name, placeholder, options, optionRenderer, valueRenderer, onChange, value } = this.props;

    return (
      <Select
        clearable={false}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        options={options}
        optionRenderer={optionRenderer}
        valueRenderer={valueRenderer}
        value={value}
        className='Default'
        optionClassName='OptionDefault'
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

export default Selector;
