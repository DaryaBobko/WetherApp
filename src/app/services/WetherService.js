import _ from "lodash";

export default class WetherService {

  constructor() {
    this.transformWetherApiResponse = this.transformWetherApiResponse.bind(this);
    this.descriptionWether = this.descriptionWether.bind(this);
    this.transformWetherTomorrowApiResponse = this.transformWetherTomorrowApiResponse.bind(this);
    this.transformWetherFutureApiResponse = this.transformWetherFutureApiResponse.bind(this)
  }

  transformWetherApiResponse (wetherInfo) {
    console.log(wetherInfo);
    let dateNow = new Date().toString();

    return  {
      date: dateNow,
      windSpeed: wetherInfo.wind.speed +'м/с',
      name: wetherInfo.name,
      cloudiness: wetherInfo.clouds.all + '%',
      min: Math.floor(wetherInfo.main.temp_min - 273.15, 2) + ' ℃',
      max: Math.floor(wetherInfo.main.temp_max - 273.15, 2) + ' ℃',
      humidity: wetherInfo.main.humidity + '%',
      description: this.descriptionWether(wetherInfo.weather[0].description)
    }
  }

  descriptionWether (description) {
    switch (description) {
      case 'clear sky':
        return 'Небо чистое';
        break;
      case 'few clouds':
        return 'Прохладно';
        break;
      case 'scattered clouds':
        return 'Переменно облочно';
        break;
      case 'broken clouds':
        return 'Облочно';
        break;
      case 'shower rain':
        return 'Возможен дождь';
        break;
      case 'rain':
        return 'Дождь';
        break;
      case 'thunderstorm':
        return 'Гроза';
        break;
      case 'mist':
        return 'Туман';
        break;
      default:
      return 'пока не известно';
    }
  }

  transformWetherTomorrowApiResponse (wetherInfo) {
    console.log(wetherInfo);
    let now = new Date();
    const firstIndex = Math.ceil((24 - now.getHours()) / 3);

    const tommorowList = wetherInfo.list.slice(firstIndex, firstIndex + 8);
    const minTemperature = _.minBy(tommorowList, item => item.main.temp_min).main.temp_min;
    const maxTemperature = _.maxBy(tommorowList, item => item.main.temp_max).main.temp_max;
    const maxWindSpeed = _.maxBy(tommorowList, item => item.wind.speed).wind.speed;
    const maxHumidity = _.maxBy(tommorowList, item => item.main.humidity).main.humidity;
    const maxСlouds = _.maxBy(tommorowList, item => item.clouds.all).clouds.all;
    const description = tommorowList[4].weather[0].description;
    const date = tommorowList[4].dt_txt;
    
    return  {
      date: date,
      windSpeed: maxWindSpeed + 'м/с',
      name: wetherInfo.city.name,
      cloudiness: maxСlouds + '%',
      min: Math.floor(minTemperature - 273.15, 2) + ' ℃',
      max: Math.floor(maxTemperature - 273.15, 2) + ' ℃',
      humidity: maxHumidity + '%',
      description: this.descriptionWether(description)
    }
  }

  transformWetherFutureApiResponse (wetherInfo) {
    debugger;
    console.log(wetherInfo);
    let now = new Date();
    const firstIndex = Math.ceil((24 - now.getHours()) / 3);

    const tommorowList = wetherInfo.list.slice(firstIndex + 8, firstIndex + (8*2));

    const minTemperature = _.minBy(tommorowList, item => item.main.temp_min).main.temp_min;
    const maxTemperature = _.maxBy(tommorowList, item => item.main.temp_max).main.temp_max;
    const maxWindSpeed = _.maxBy(tommorowList, item => item.wind.speed).wind.speed;
    const maxHumidity = _.maxBy(tommorowList, item => item.main.humidity).main.humidity;
    const maxСlouds = _.maxBy(tommorowList, item => item.clouds.all).clouds.all;
    const description = tommorowList[4].weather[0].description;
    const date = tommorowList[4].dt_txt;
    
    return  {
      date: date,
      windSpeed: maxWindSpeed + 'м/с',
      name: wetherInfo.city.name,
      cloudiness: maxСlouds + '%',
      min: Math.floor(minTemperature - 273.15, 2) + ' ℃',
      max: Math.floor(maxTemperature - 273.15, 2) + ' ℃',
      humidity: maxHumidity + '%',
      description: this.descriptionWether(description),
    }
  }
}