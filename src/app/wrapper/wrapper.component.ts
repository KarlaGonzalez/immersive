import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  btnText: string = 'Back to the top'; // Harcoded - No csv data 
  @Input() productSelected: any; 
  @Input() productContent: any; //ProductModel
  hideElement = false;
  @Output() fixedMenu = new EventEmitter<boolean>();
  tabsNavigation = [ // Harcoded - Future rows aditions
    {
      id: 'overview',
      tab: 'Overview'
    },
    {
      id:'summary',
      tab: 'Summary'
    },
    {
      id: 'success-stories',
      tab: 'Success Stories'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    //console.log('Window WRAPPER, ',  this.innerWidth = window.innerWidth);
  }

  toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  hidesHero(hidden: boolean) {
    this.hideElement = hidden;
    this.hideElement ? this.fixedMenu.emit(true) : this.fixedMenu.emit(false);
  }

}
