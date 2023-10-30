import { Directive, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appSetIframeStyle]'
})

export class appSetIframeStyle implements OnInit, AfterViewInit {
    
    constructor(
        private elementRef: ElementRef, 
        private renderer: Renderer2
        ){}

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', '250px !important');
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100% !important');
        console.log('INIT')
    }

    ngAfterViewInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', '250px !important');
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100% !important');
        console.log('AFTER')
    }
}