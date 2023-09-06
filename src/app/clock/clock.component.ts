import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit{
  time = (new Date().toString().split(" ")[4])

  ngOnInit(): void {
    setInterval(()=>(this.time = new Date().toString().split(" ")[4]), 1000);
  }
}
