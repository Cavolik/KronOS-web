import {Component} from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent {
  volumeValue: number = 50;
  volumeOutput: number = 0.5;

  updateVolumeValue() :void {
    this.volumeOutput = this.volumeValue/100;
    console.log('Volume:', this.volumeOutput);
  }
}
