import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {concatMap, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey :string = "d725865082eefb161072b2552d21b286";
  apiUrl :string = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

  constructor(private http: HttpClient) {
  }

  checkWeatherLocation = () => {
    return this.getLocation().pipe(
      concatMap((position: any) => {
        const {coords} = position;
        console.log(position);
        return this.checkWeather(coords.latitude, coords.longitude);
      })
    );
  }
  checkWeatherCity = (name: string) => {
    console.log(`${name}`)
    return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${this.apiKey}`).pipe(
      concatMap((position: any) => {
        const {lat, lon} = position[0];
        console.log(position[0]);
        return this.checkWeather(lat, lon);
      })
    );
  }
  private checkWeather = (lat: number, lon: number): Observable<any> => {
    console.log(lat, lon)
    return this.http.get(`${this.apiUrl}&appid=${this.apiKey}&lat=${lat}&lon=${lon}`);
  }
  private getLocation = () => {
    return new Observable((observer) :void => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) :void => {
            observer.next(position);
            observer.complete();
          },
          (error) :void => {
            observer.error(error);
          }
        )
      } else {
        observer.error('Geolocation is not available');
      }
    })
  }
}
