import { Directive, Input, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements AfterViewInit {
  @Input('ratio') parallaxRatio : number = 0.5

  @Input('appParallax') 
  set value(value: number) {
    this.eleRef.nativeElement.style.left = (this.initialLeft - (value * this.parallaxRatio)) + 'px'
  }
  initialLeft : number = 0

  constructor(private eleRef : ElementRef) {}

  @HostListener('scroll', ['$event'])
  onWindowScroll(event){
    this.eleRef.nativeElement.style.left = (this.initialLeft - (event.target.scrollLeft * this.parallaxRatio)) + 'px'
  }

  ngAfterViewInit(): void {
    this.initialLeft = this.eleRef.nativeElement.getBoundingClientRect().left;
  }
}