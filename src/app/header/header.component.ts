import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { CsvDataService } from '../shared/services/csv-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteDescription: string = 'Immersive Technologies';
  logoTF = '../../assets/img/TFS-logo.png';
  navOptions: Array<String> = []; 
  catalogOptions: Array<String> = []; 
  @Output() selectedPage = new EventEmitter<string>();
  //showSubMenu: boolean = false; 
  //@Output() navChangeEvent = new EventEmitter<String>();

  constructor(private csvService: CsvDataService) {}
  
  ngOnInit() {
    this.navOptions = [];
    this.csvService.emitData$.pipe(
      take(1)
    ).subscribe((serviceData) => {
      //console.log('Header service data: ');
      //console.log(serviceData);
      
      if(serviceData) {
        this.assignData(serviceData);
      }
    });
  }

  assignData(serviceData) {
    this.catalogOptions = this.csvService.clearData(serviceData[0]);
    this.catalogOptions.shift();
    //console.log(this.catalogOptions);
    /* if (this.catalogOptions) {
      this.getproductsMenu(this.catalogOptions)
    } */
  }
  
  dropdownClicked(e, page) {  
    if (page === 'catalog') {
      this.navOptions = [];
      const selectedOptions = e.target.nextSibling.children;
      const currentOptions: Element[] =  Array.from(selectedOptions); // HTMLElement
      //console.log(currentOptions)
      for(var i=0; i < currentOptions.length; i++) {
        this.navOptions.push(currentOptions[i].innerHTML);
      }
      
      this.selectedPage.emit(page);
    } else { //if (page === 'decision-tree') || 'about-us'
      this.selectedPage.emit(page)
    }
    
    /* const activeDropdown = e.target.nextSibling
    const subMenu = document.querySelector('.submenu-container'); //[0]
    if (!activeDropdown.classList.contains('show')) { // nextSibling: div.dropdown-menu.show
      this.showSubMenu = true;
    } else {
      subMenu.setAttribute('style', 'display: none');
      this.showSubMenu = false;
    } */
  }

  optionClicked(e) {
    const optionName = e.target.innerText;
    //this.navChangeEvent.emit(optionName);
    this.sendDropdownOption(optionName);
  }

  sendDropdownOption(optionName: string) { //: void
    // send message to subscribers via observable subject
    this.csvService.sendDropdownOption(optionName);
  }

  /* getproductsMenu(productList) {
    this.csvService.setproductsMenu(productList)
  } */
}
