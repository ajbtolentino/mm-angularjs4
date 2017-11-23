import {  Directive, ElementRef, AfterViewInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomLabel]'
})
export class CustomLabelDirective implements AfterViewInit {
  @Input() appCustomLabel: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (this.appCustomLabel) {
      this.el.nativeElement.innerText = this.appCustomLabel;
    }
  }
}
