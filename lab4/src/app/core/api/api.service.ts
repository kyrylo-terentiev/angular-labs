import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    const result = this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=8740a795cf70e52aadfeef9efb7ebc04&units=metric');
    console.log(location);
    console.log(result);
    return result;
  }
}
