import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CsvDataService } from './shared/services/csv-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Nav menu properties
  navOptions: Array<String> = []; 
  showSubMenu: boolean = false;
  serviceData: Array<Array<string>> = [];
  productName: string;
  //loading = false
  loadedPage = 'catalog';
  @Input() hideElement: boolean;
  staticMenu: boolean = false;

  /* Product model data */
  productDetail: Object; 
  videoUrl: string;
  //innerWidth: any;
  /* treeHeight = '800px';
  treeWidth = '1700px' */

  constructor(private csvService: CsvDataService) {}

  ngOnInit() {
    this.navOptions = [];
    this.suscribeToService();
    this.suscribeToOptionChanged();
    //console.log('Window APP, ',  this.innerWidth = window.innerWidth);
  }
  
  private suscribeToService() {
    this.csvService.emitData$.pipe(
      take(1) // Serves as unsubscribe & limits the number of emissions of the suscription -- add more to test the extractData() methos inside csv-data.service setTimeout 
    ).subscribe((responseService) => {
      this.serviceData = responseService;
      //console.log('APP service data: ', this.serviceData);
      
      // Sets 1st productDetail
      this.productDetail = this.getProductByName(this.serviceData[0][1]);
      //console.log('1st productDetail: ', this.productDetail);      
    });
  }

  getProductByName(productName: string) {
    const colIndex = this.serviceData[0].findIndex(itemName => itemName === productName); // Finds column
    //console.log('colIndex, ', colIndex);

    // Overview url test
    this.videoUrl = this.serviceData[2][colIndex];
   
    // Data assigments - Returns default {productDetail}
    return {
      // Tabs content
      id: colIndex,
      title: 'Overview', // Harcoded - Future row additions
      content: this.getData(1, colIndex) ? this.getData(1, colIndex) : '', 
      videoUrl: this.getData(2, colIndex),
      videoCaption: this.getData(3, colIndex) ? this.getData(3, colIndex) : '', 
      homepage: this.getData(4, colIndex),
      // Summary content
      feature1: this.getData(5, 0) ? this.getData(5, 0) : '', // Feature
      feature2: this.getData(6, 0) ? this.getData(6, 0) : '', // Feature
      feature3: this.getData(7, 0) ? this.getData(7, 0) : '', // Feature
      featureVal1: this.getData(6, colIndex) ? this.getData(6, colIndex) : '',
      featureVal2: this.getData(7, colIndex) ? this.getData(7, colIndex) : '',
      featureVal3: this.getData(8, colIndex) ? this.getData(8, colIndex) : '',
      helpTopics: [
        this.getData(13, colIndex) ? this.getData(13, colIndex) : 'Coming soon...',
        this.getData(14, colIndex) ? this.getData(14, colIndex) : '',
        this.getData(15, colIndex) ? this.getData(15, colIndex) : '',
        this.getData(16, colIndex) ? this.getData(16, colIndex) : '',
        this.getData(17, colIndex) ? this.getData(17, colIndex) : '',
        this.getData(18, colIndex) ? this.getData(18, colIndex) : ''
      ],
      // Stories content 
      headline: this.getData(24, colIndex) ? this.getData(24, colIndex) : '', 
      storiesDescription: this.getData(25, colIndex) ? this.getData(25, colIndex) : '', 
      video1: this.getData(26, colIndex) ? this.getData(26, colIndex) : '', // Harcoded generic tabs video: this.serviceData[2][productColumIndex]
      cardTitle1: this.getData(27, colIndex) ? this.getData(27, colIndex) : '', 
      cardDescription1: this.getData(28, colIndex) ? this.getData(28, colIndex) : '',
      video2: this.getData(29, colIndex) ? this.getData(29, colIndex) : '', 
      cardTitle2: this.getData(30, colIndex) ? this.getData(30, colIndex) : '',
      cardDescription2: this.getData(31, colIndex) ? this.getData(31, colIndex) : '',
      video3: this.getData(32, colIndex) ? this.getData(32, colIndex) : '', 
      cardTitle3: this.getData(33, colIndex) ? this.getData(33, colIndex) : '',
      cardDescription3: this.getData(34, colIndex) ? this.getData(34, colIndex) : '',
    };
  }

  getData(rowNumber, productColumnIndex) {
    return this.serviceData[rowNumber][productColumnIndex];
  }

  suscribeToOptionChanged() {
    // Always listens observable of change of productName by user 
    this.csvService.dropdownOption$.subscribe(
      productName => {
        //console.log('APP productName', productName)
        if(productName) {
          this.productDetail = this.getProductByName(productName)
          console.log('New productDetail', this.productDetail);
        }
      },
      err => console.log('something went wrong: ', err)
    ) 
  }

  /* changeCsvData(optionName) {
    console.log('app - optionName: ')
    console.log(optionName)
    this.productName = optionName;
    this.suscribeToService();
  } */

  navOptionClicked(e) {
    if(!this.navOptions.length){
      const selectedOptions = e.target.nextSibling.children;
      const currentOptions: Element[] =  Array.from(selectedOptions); // HTMLElement
      //console.log(currentOptions)
  
      for(var i=0; i < currentOptions.length; i++) {
        this.navOptions.push(currentOptions[i].innerHTML);
      }
    } else {
      this.navOptions = []; 
      this.navOptionClicked(e); 
    }
    
    const activeDropdown = e.target.nextSibling
    const subMenu = document.querySelector('.submenu-container'); //[0]
    if (!activeDropdown.classList.contains('show')) { // nextSibling: div.dropdown-menu.show
      this.showSubMenu = true;
      //subMenu.setAttribute('style', 'color: red;');
    } else {
      subMenu.setAttribute('style', 'display: none');
      this.showSubMenu = false;
    }
  }

  onNavigate(page: string) {
    //console.log('App page: ', page);
    this.loadedPage = page;
  }

  fixedHeader(fixed: boolean) {
    //console.log('staticMenu ', fixed);
    this.staticMenu = fixed;
  }
}
