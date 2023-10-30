import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {
  btnText: string = 'Back to the top'; // Harcoded - No csv data 
  
  constructor() { }

  ngOnInit(): void {
  }

  toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
