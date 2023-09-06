import {Component} from '@angular/core';
import {RadioService} from "./radio.service";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  name: string = "";
  playing: boolean = false;
  constructor(private radio: RadioService) {
    this.name = this.radio.getPlayList()[0].name;
    this.playing = this.radio.playing;
  }

  playPause = () => {
    this.radio.playPause();
    this.playing = this.radio.playing;
  }
    chanelHigher = () => {
    this.name = this.radio.chanelHigher();
  }

  chanelLower = () => {
    this.name = this.radio.chanelLower();
  }
}
