import { Directive, Output, HostListener, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Output() scrolled: EventEmitter = new EventEmitter();
  
  @HostListener('scroll', ['$event'])
  onWindowScroll(event){
    console.log(event.target.scrollLeft);
  }
  constructor(private eleRef: ElementRef) { }

}
