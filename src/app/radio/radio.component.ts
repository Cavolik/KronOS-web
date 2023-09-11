import { Component } from '@angular/core';
import { RadioService } from "./radio.service";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  playListName: string = "";
  playing: boolean = false;

  constructor(private radio: RadioService) {
    this.playListName = this.radio.getPlayList()[0].name;
    this.playing = this.radio.playing;
  }

  playPause = (): void => {
    this.radio.playPause();
    this.playing = this.radio.playing;
  }
  channelUp = (): void => {
    this.playListName = this.radio.channelUp();
  }

  channelDown = (): void => {
    this.playListName = this.radio.channelDown();
  }
}
