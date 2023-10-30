import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { CsvDataService } from '../shared/services/csv-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  //dropdownOption: string; // Retrieves app-header selected option
  @Input() productDetail: ProductModel;
  @Input() navigationOptions = [];
  @Output() hideHero = new EventEmitter<boolean>();
  @Output() sectionId = new EventEmitter<string>();
  //@ViewChildren('optionRef') optionRef: QueryList<ElementRef>;
  scrollOffset: any;
  newindex = 0;  
  initialProductName: string = '';

  constructor(private eleRef: ElementRef, private csvService: CsvDataService) { }

  ngOnInit(): void {
    this.suscribeToOptionChanged(); //same as app
    //console.log('TABS productDetail', this.productDetail);
  }

  ngAfterViewInit() {
    this.triggerFakeClick('overview', 0);
  }

  suscribeToOptionChanged() {
    // Always listens observable of change of productName by user 
    this.csvService.dropdownOption$.subscribe(
      productName => {
        if (productName) {
          this.newindex = 0;
          this.triggerFakeClick('overview', 0);
        }
        /* if(!this.initialProductName) {
          this.initialProductName = productName;
          console.log('NEW initialProductName', productName)
        } else {
          this.triggerFakeClick('overview', 0);
          console.log('NOT new ', productName)
        } */
      },
      err => console.log('something went wrong: ', err)
    ) 
  }

  initNavigationTabs(e?: Event, i?: number) {
    //console.log(( <HTMLElement>e.target ))
    console.log('index TAB ', i)
    //console.log('eleRef TAB ', this.eleRef)
    //const navItems = document.querySelectorAll(".c-nav__item");
    const navItems = document.querySelectorAll(".c-nav__links a");
    const navs = document.querySelectorAll(".c-nav__item");
    // Removes/Adds active class to current selected 
    //document.querySelectorAll(".c-nav__links a").forEach(function(element) {
      //element.addEventListener('click', function(e) {
        navs.forEach(item => { //: Element
          item.classList.remove('c-nav--active');
        });
        //e.currentTarget.classList
        //console.log((<HTMLElement>e.target).classList)
        //const currentActive = (<HTMLElement>e.target).classList.add('c-nav--active'); //( <HTMLElement>e.target ).parentElement;
        //currentActive.classList.add('c-nav--active');
        const currentActive = (<HTMLElement>e.target).parentElement.classList.add('c-nav--active'); //( <HTMLElement>e.target ).parentElement;
        /* console.log('event tab selected, ', e);
        console.log(currentActive.classList); */
      //});
    //});
  }

  @HostListener("window:scroll", ['$event'])
  onScroll(e: Event){
    this.scrollOffset = (<HTMLElement>e.srcElement).children[0].scrollTop; // Reference: (<HTMLInputElement>event.target).value    
    //console.log("scrollOffset: ", this.scrollOffset);    
    //console.log("clientHeight: ", document.body.clientHeight); 

    if (this.productDetail.videoUrl) {
      if (this.scrollOffset > 0 && this.scrollOffset <= 540) { // Overview section
        this.newindex = 0;
        this.triggerFakeClick('overview', 0); //Overview
      } else if (this.scrollOffset >= 541 && this.scrollOffset <= 1070) { // Summary section
        this.newindex = 1;
        this.triggerFakeClick('summary', 1); //Summary
      } else if (this.scrollOffset >= 1071) { // Success Stories section
        this.newindex = 2;
        this.triggerFakeClick('success-stories', 2); //Success Stories
      }
    } else {
      if (this.scrollOffset > 0 && this.scrollOffset <= 200) { // Overview section
        this.newindex = 0;
        this.triggerFakeClick('overview', 0); //Overview
      } else if (this.scrollOffset >= 201 && this.scrollOffset <= 494) { // Summary section
        this.newindex = 1;
        this.triggerFakeClick('summary', 1); //Summary
      } else if (this.scrollOffset >= 495) { // Success Stories section
        this.newindex = 2;
        this.triggerFakeClick('success-stories', 2); //Success Stories
      }
    }
    
    this.callStatic(this.scrollOffset);
  }

  triggerFakeClick(sectionId?: string, newindex?: number) {
    /* let el: HTMLElement = this.optionRef.nativeElement;
    el.click(); */
    //console.log('sectionId ', sectionId)
    this.sectionId.emit(sectionId);

    if (this.newindex === newindex) {
      let smallBox = this.eleRef.nativeElement.querySelector('#box' + newindex);
      var event = new Event('click', { bubbles: true, cancelable: false })
      smallBox.dispatchEvent(event);
    }
  }

  makeSticky() {
    const tabsContainer = document.querySelector('#tabs-container');
    tabsContainer.classList.add('sticky');
  }

  callStatic(scrollOffset) {
    const tabsContainer: HTMLElement = document.querySelector('#tabs-container');
    //console.log("tabsContainer: ", tabsContainer.offsetTop);
    if (scrollOffset === 0 && tabsContainer.classList.contains('sticky')) {
      tabsContainer.classList.remove('sticky');
      this.hideHero.emit(false); // Shows hero component 
    } else if (scrollOffset > 0) { // >= 10
      this.hideHero.emit(true); // Hides hero component 
      this.makeSticky(); //ok after emit 
    } else if (scrollOffset >= 20) { //331
      //this.makeSticky();
    }
  }

}
