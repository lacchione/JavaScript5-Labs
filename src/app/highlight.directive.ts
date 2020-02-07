import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elm: ElementRef) {}
  @HostListener('mouseover') onHoverOn() {
    this.elm.nativeElement.setAttribute('style', 'text-decoration: underline; color: blue;');
  }
  @HostListener('mouseout') onHoverOff() {
    this.elm.nativeElement.setAttribute('style', 'text-decoration: none; color: black;');
  }

}
