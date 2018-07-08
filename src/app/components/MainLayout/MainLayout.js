import React, { Component } from 'react';
import './MainLayout.css';
import Select from '../../common/Select/Select';
import Tabs from '../Tabs/Tabs';
import Footer from '../Footer/Footer';
import { getTodayWether, getTomorrowWether, getFutureWether } from '../../actions/wetherApiRequest';
import WetherService from '../../services/WetherService';
import { DAY_TABS } from '../../constants/tabs';

class MainLayout extends Component {

constructor(props){
  super(props);

  this.cities = [
    {id: '625144	', label: 'Минск'},
    {id: '629634', label: 'Брест'},
    {id: '624079', label: 'Орша'},
    {id: '630429', label: 'Барановичи'},
    {id: '622034', label: 'Шклов'},
    {id: '630468', label: 'Бобруйск'},
    {id: '624034', label: 'Осиповичи'},
    {id: '626956', label: 'Копыль'},
    {id: '624700', label: 'Несвиж'},
    {id: '624700', label: 'Городея'},
    {id: '625128', label: 'Мир'},
    {id: '626939', label: 'Кореличи'},
    {id: '624785', label: 'Новогрудок'},
    {id: '621754', label: 'Слоним'},
    {id: '627908', label: 'Глыбокое'},
    {id: '620483', label: 'Узда'},
    {id: '623549', label: 'Пинск'},
    {id: '624784', label: 'Новополоцк'},
    {id: '620127', label: 'Витебск'},
    {id: '627907', label: 'Гомель'},
    {id: '618806', label: 'Жлобин'},
    {id: '625324', label: 'Мозырь'},
    {id: '618913', label: 'Жабинка'},
    {id: '628884', label: 'Драгичин'},
    {id: '626081', label: 'Лида'},
    {id: '621266', label: 'Столбцы'},
    {id: '625721', label: 'Любань'},
    {id: '628155', label: 'Городок'},
    {id: '625972', label: 'Логойск'},
    {id: '620445', label: 'Воложин'},
    {id: '626471', label: 'Крупки'},
    {id: '628634', label: 'Держинск'},
    {id: '627214', label: 'Клецк'},
  ];

  this.wetherService = new WetherService();

  this.state = {
    selectedCity: this.cities[0],
    selectedDay: DAY_TABS.today
  };

  this.downloadWetherInfo = this.downloadWetherInfo.bind(this);
  this.setCity = this.setCity.bind(this);
  this.setDay = this.setDay.bind(this);
}

setCity(selectedOption) {
  debugger;
  this.setState({selectedCity : selectedOption });

  this.downloadWetherInfo(selectedOption.id, this.state.selectedDay);
}

setDay(selectedTab) {
  this.setState({selectedDay : selectedTab });

  this.downloadWetherInfo(this.state.selectedCity.id, selectedTab);
}

downloadWetherInfo(cityId, day) {
    let promise;

    switch (day) {
      case DAY_TABS.today: {
        promise = getTodayWether(cityId);
        break;
      }
      case DAY_TABS.tomorrow: {
        promise = getTomorrowWether(cityId);
        break;
      }
      case DAY_TABS.future: {
        promise = getFutureWether(cityId);
        break;
      }
    }

    promise
    
    .then(transformed => {
      this.setState(transformed);
    });
    
}

renderOption = (Option) => {
  return (
    <div className="WrapperValueMain">
      {Option.label}
    </div>
  );
}

renderValue = (selectedOption) => {
  return (
    <div className="WrapperOptionMain">
      {selectedOption.label}
    </div>
  );
}


  render() {
  return (
    <div className='Main'>
      <div className='Main-background'>
        <div className='Main-wrapperContent'>
          <div className='Main-widthContent'>
            <div className='Main-heder'>
              <div className='Main-logo'>Wether</div>
              <Select
                value={this.state.selectedCity}
                placeholder= 'Введите название города'
                onChange={this.setCity}
                valueRenderer={this.renderValue}
                optionRenderer={this.renderOption}
                options={this.cities}
              />
              <div className='Main-Title'>{this.state.name}</div>
            </div>
          </div>
          <div className='Main-line'></div>
          <div className='Main-widthContent'>
            <Tabs onTabClick={this.setDay}/>
          </div>
          <div className='Container'>
            <div className='Temp'>Минимальная температура воздуха: {this.state.min} </div>
            <div className='Temp'>Максимальная температура воздуха: {this.state.max}</div>
            <div>Влажность воздуха: {this.state.humidity} </div>
            <div>Скорость ветра: {this.state.windSpeed}</div>
            <div>Облачность: {this.state.cloudiness}</div>
            <div className='description'>{this.state.description}</div>
            <div className='date'>{this.state.date}</div>
          </div>
        </div>
        <div className='Main-widthContent'>
          <div className='Main-line'></div>
          <Footer/>
        </div>
      </div>
    </div>
  );
  }
}

export default MainLayout;