import {Component} from '@angular/core';
import {WeatherService} from './weather/weather.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'KronOS-web';


}
