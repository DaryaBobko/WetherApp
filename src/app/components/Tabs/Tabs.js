import React, { Component } from 'react';
import './Tabs.css';
import { DAY_TABS } from '../../constants/tabs';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: true,
      tomorrow: false,
      Future: false,
    };

    this.handleTodayClick = this.handleTodayClick.bind(this);
    this.handleTomorrowClick = this.handleTomorrowClick.bind(this);
    this.handleFutureClick = this.handleFutureClick.bind(this);
  }

  handleTodayClick() {
    this.props.onTabClick(DAY_TABS.today);
    this.setState({today: !this.state.today, tomorrow: false, future: false});
  }

  handleTomorrowClick() {
    this.props.onTabClick(DAY_TABS.tomorrow);
    this.setState({today: false, tomorrow: !this.state.tomorrow, future: false});
  }

  handleFutureClick() {
    this.props.onTabClick(DAY_TABS.future);
    this.setState({today: false, tomorrow: false, future: true});
  }

  render() {

  return (
    <div className='Tabs-Main'>
      <a href="#yesterday" className={!this.state.today ? 'Tabs-ListElement' : 'Tabs-ListElementActive'} onClick={this.handleTodayClick}>Сегодня</a>
      <a href="#today" className={!this.state.tomorrow ? 'Tabs-ListElement' : 'Tabs-ListElementActive'} onClick={this.handleTomorrowClick}>Завтра</a>
      <a href="#tomorrow" className={!this.state.future ? 'Tabs-ListElement' : 'Tabs-ListElementActive'} onClick={this.handleFutureClick}>Послезавтра</a>
    </div>
  );
  }
}

export default Tabs;
