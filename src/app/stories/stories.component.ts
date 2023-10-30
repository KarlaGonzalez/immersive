import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductModel } from '../shared/models/product.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit, AfterViewInit {
  @Input() productDetail: ProductModel;
  sectionTitle: string = 'Success Stories'; // Harcoded - Future rows aditions
  cardsContent: Object[] = [
    /* {
      id: '1',
      cardTitle: 'HeLa cells',
      cardDescription: 'EVOS M7000. Stains: NucBlue (nucleus), Phalloidin. Deconvolved using Celeste 5.0 Image Analysis Software',
      videoURL: '../../assets/video/antibodies.mp4', 
      videoCaption: 'Caption, video title, details, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }*/
  ]
  innerWidth: any;
  //heightVideo: number = 200; //ok 4 Desktop
  //widthVideo:  number; 
  storyText: string = 'Take me to the story';
  soonCopy: string = 'Coming soon...';
  //testVideo = 'https://thermofisher.sharepoint.com/:v:/s/ImmersiveTechnologiesCoE/EYd7fvuK5AxFkH7pcS1cHO0ByvTNJfrugdIGjcvquXlwTg?e=Krbhs9';

  constructor(public sanitizer: DomSanitizer) { //this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void {
    //console.log('STORIES productDetail', this.productDetail);
    this.isMobile();
  }

  ngAfterViewInit() {
    //this.setiFrames();
  }
  
  /* setiFrames() {
    const stack = document.querySelector('.card-video1');
    const stack2 = document.querySelector('.card-video2');
    const stack3 = document.querySelector('.card-video3');
    //stack.innerHTML = this.productDetail.video1; // Missing validation iframe !
    //stack2.innerHTML = this.productDetail.video2; 
    //stack3.innerHTML = this.productDetail.video3; 
    const iFrames = document.querySelectorAll<HTMLElement>('iframe'); 
    if (iFrames) {
      iFrames.forEach(elem => {
        elem.classList.add('video-dimensions');
        elem.setAttribute('height', '250px !important');
        elem.setAttribute('width', '100% !important');
      });
    }
  } */

  setStyles(iframe) {
    let newFrame = '';
    newFrame = iframe.replace('640', '100%').replace('360', '250px'); //width="100% !important" height="250px !important" -- width="640" height="360"
    return newFrame
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('Resize STORIES, ', event)
    this.innerWidth = window.innerWidth;
    //this.findBreakpoint(this.innerWidth);
  }

  isMobile() {
    this.innerWidth = window.innerWidth;
    //console.log('MOBILE STORIES, ', this.innerWidth = window.innerWidth)
    //this.findBreakpoint(this.innerWidth);
  }

  /* findBreakpoint(width) {
    //console.log('findBreakpoint STORIES, ')
    if (width <= 3600 && width >= 1200) { //Desktop
      this.widthVideo = 341;
    } else if (width === 768) { // iPad
      //console.log('add STORIES!!, ')
      this.widthVideo = 202;
    }  else if (width <= 1199 && width >= 992) {
      this.widthVideo = 280;
    }  else if (width <= 991 && width >= 768) {
      this.widthVideo = 200;
    } else if (width <= 767 && width >= 576) {
      this.widthVideo = 500;
    } else if (width <= 575 && width >= 572) {
      this.widthVideo = 500;
    } else if (width <= 535 && width >= 526) { //space
      this.widthVideo = 490;
    } else if (width <= 525 && width >= 505) {
      this.widthVideo = 470;
    } else if (width <= 505 && width >= 500) {
      this.widthVideo = 460;
    }  else if (width === 400 ) { //Responsive
      //console.log('Responsive stories, ')
      this.widthVideo = 360;
    } else if (width === 360 ) { //Moto G4
      this.widthVideo = 322;
    } else if (width === 411 ) { //Pixel 2
      this.widthVideo = 372;
    } else if (width === 320 ) { //iPhone 5/SE
      this.widthVideo = 282;
    }  else if (width === 375 ) { //iPhone 6/7/8 & iPhone X
      this.widthVideo = 338;
    }  else if (width === 414 ) { //iPhone 6/7/8 Plus
      this.widthVideo = 378;
    } else if (width === 280 ) { //Galaxy Fold
      this.widthVideo = 242;
    }
    // Missing iPad Pro, Surface Duo
  }
 */

}
