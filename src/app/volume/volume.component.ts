import { Component } from '@angular/core';
import { RadioService } from "../radio/radio.service";

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent {
  volumeValue: number = 50;
  volumeOutput: number = 0.5;

  constructor(private radio: RadioService) {
    this.updateVolumeValue();
  }

  updateVolumeValue(): void {
    this.volumeOutput = this.volumeValue / 100;
    this.radio.setAudioLevel(this.volumeOutput);
  }
}
