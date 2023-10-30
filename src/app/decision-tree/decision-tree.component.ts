import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.findBody();
  }

  /* findBody() {
    document.querySelector('#treeFrame').setAttribute('style', 'overflow-x: scroll')
    console.log('frame')
  } */

}
