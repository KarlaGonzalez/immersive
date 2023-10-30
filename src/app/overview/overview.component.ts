import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() videoUrl: string;
  heightVideo: number = 500;; // Desktop 500 - Mobile xs 300
  widthVideo:  number; //= 1100; //= 1100; // Desktop 1100 - Mobile xs 500
  @Input() productDetail: ProductModel;
  innerWidth: any;
  //testVideo: 'https://thermofisher.sharepoint.com/:v:/s/ImmersiveTechnologiesCoE/EYd7fvuK5AxFkH7pcS1cHO0ByvTNJfrugdIGjcvquXlwTg?e=Krbhs9'
  @Input() mgTop: boolean;
  //testuRL = 'https://web.microsoftstream.com/video/fef00f52-7852-4887-a307-1d1b1e06b979';
  //testuRL = 'https://web.microsoftstream.com/video/fef00f52-7852-4887-a307-1d1b1e06b979';
  //safeVideo: SafeResourceUrl

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //console.log('OVERVIEW productDetail', this.productDetail);
    //console.log('Window OVERVIEW, ',  this.innerWidth = window.innerWidth);
    //this.safeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.testuRL);
    this.isMobile();
  } 
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('Resize OVERVIEW, ', event)
    this.innerWidth = window.innerWidth;
    this.findBreakpoint(this.innerWidth);
  }

  isMobile() {
    this.innerWidth = window.innerWidth;
    //console.log('MOBILE OVERVIEW, ', this.innerWidth = window.innerWidth)
    this.findBreakpoint(this.innerWidth);
  }

  findBreakpoint(width) {
    //console.log('findBreakpoint OVERVIEW, ')
    if (width <= 3600 && width >= 1200) {
      this.widthVideo = 1100;
      //console.log('add desktop!!, ')
       /* const textContent = document.querySelector('.overview-container');
      if (!textContent.classList.contains('desktop')) {
        textContent.classList.add('desktop')
        console.log('desktop???... ', textContent.classList.contains('desktop'))
      }  */
    } else if (width <= 1199 && width >= 992) {
      this.widthVideo = 900;
    } else if (width <= 991 && width >= 775) {
      this.widthVideo = 680;
    } else if (width <= 774 && width >= 768) {
      this.widthVideo = 640;
    } else if (width <= 767 && width >= 572) {
      this.widthVideo = 500;
    } else if (width <= 571 && width >= 480) {
      this.widthVideo = 420;
    } /* else if (width <= 415 && width >= 360) { //Check if needed
      //console.log('MOBILE 1, ')
      this.widthVideo = 320;
    } else if (width <= 359 && width >= 320) { //Check if needed
      //console.log('MOBILE 2, ')
      this.widthVideo = 250;
    } */  else if (width === 400 ) { //Responsive
      //console.log('Responsive stories, ')
      this.widthVideo = 370;
      this.heightVideo = 300;
    } else if (width === 360 ) { //Moto G4
      this.widthVideo = 325;
      this.heightVideo = 300;
    } else if (width === 411 ) { //Pixel 2
      this.widthVideo = 372;
      this.heightVideo = 300;
    } else if (width === 320 ) { //iPhone 5/SE
      this.widthVideo = 282;
      this.heightVideo = 300;
    } else if (width === 375 ) { //iPhone 6/7/8 & iPhone X
      this.widthVideo = 338;
      this.heightVideo = 300;
    } else if (width === 414 ) { //iPhone 6/7/8 Plus
      this.widthVideo = 378;
      this.heightVideo = 300;
    } else if (width === 280 ) { //Galaxy Fold
      this.widthVideo = 244;
      this.heightVideo = 300;
    }
    // Missing iPad Pro, Surface Duo

    /*else if (width >= 1000 && width <= 3000) { //Add padding for 'Overview' text (Desktop only)
      //this.widthVideo = 360;
      console.log('add desktop!!, ')
       const textContent = document.querySelector('.overview-container');
      if (!textContent.classList.contains('desktop')) {
        textContent.classList.add('desktop')
        console.log('desktop???... ', textContent.classList.contains('desktop'))
      } 
    }*/
  }

  isYouTubeLink(url) {
    //console.log('is YT...', url);
    return url.includes('youtu.be');
  }

  getVideoId(url) {
    let id = '';
    if (url.match('https://youtu.be/')) {
      id = url.replaceAll('https://youtu.be/', '');
    }
    return id
  }

}
