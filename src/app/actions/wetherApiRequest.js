import WetherService from '../services/WetherService';


export function getTodayWether(cityId) {
	const service =  new WetherService();
	return SendXHR(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=7a34994e0692ea86fa735c4f9e2c844a`)
		.then(service.transformWetherApiResponse);
}

export function getTomorrowWether(cityId) {
	const service =  new WetherService();
	return SendXHR(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&type=hour&APPID=7a34994e0692ea86fa735c4f9e2c844a`, "POST")
	.then(service.transformWetherTomorrowApiResponse);
}

export function getFutureWether(cityId) {
	const service =  new WetherService();
	return SendXHR(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&type=hour&APPID=7a34994e0692ea86fa735c4f9e2c844a`, "POST")
	.then(service.transformWetherFutureApiResponse);
}

function  SendXHR(url, method = "GET") {
	const promice = new Promise((resolve, reject) => {

		var request = new XMLHttpRequest();

		request.open(method, url);
		request.onreadystatechange = () => {
			if (request.status === 200 && request.readyState === 4) {
				resolve(JSON.parse(request.responseText));
			}
		}
		
		request.send(); 
	});

 return promice;
}
