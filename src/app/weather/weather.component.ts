import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WeatherService} from "./weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: any = null;
  form: FormGroup;

  constructor(private weatherService: WeatherService, private fb: FormBuilder) {
    this.weatherService.checkWeatherLocation().subscribe((data: any) => this.weatherData = data);
    this.form = fb.group({
      search: ''
    });
  }

  convertToDate = (timestamp: number): string => {
    let time = new Date();
    time.setTime(timestamp * 1000);
    return time.toUTCString();
  }


  search() {
    const search = this.form.value.search;
    if (search !== '') {
      this.weatherService.checkWeatherCity(this.form.value.search).subscribe((data: any) => this.weatherData = data);
    } else {
      this.weatherService.checkWeatherLocation().subscribe((data: any) => this.weatherData = data);
    }
    console.log(this.form.value.search);
  }
}
