import {  Directive, ElementRef, AfterViewInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective implements AfterViewInit {
  @Input() appCustomLabel = '';

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.innerText = this.appCustomLabel;
  }
}
