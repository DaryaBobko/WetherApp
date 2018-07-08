import React, { Component } from 'react';
import Today from './Today';
import Tomorrow from './Tomorrow';
import Yeasterday from './Yeasterday';

class Content extends Component {
  constructor(props) {
		super(props);

		this.state = {
      currentTab: props.currentTab,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTab !== this.props.currentTab) {
      this.setState({ currentTab: nextProps.currentTab })
    }
  }

  renderDefault = () => {
    return <div></div>;
  };

  render() {
    switch(this.state.currentTab) {
      case 'myDetails': {
        return <Today />;
      }
      case 'securitySettings': {
        return <Tomorrow />;
      }
      case 'subscriptions': {
        return <Yesterday />;
      }
      default:
        return this.renderDefault();
    }
  }
}

export default Content;
