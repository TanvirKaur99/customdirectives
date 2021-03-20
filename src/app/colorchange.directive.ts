import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(public el:ElementRef) {
    el.nativeElement.style.backgroundColor='red'
   }
   @HostListener('mouseenter') onMouseEnter(){
     this.el.nativeElement.style.backgroundColor="green";
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor="yellow";
  }


}
//Directives are used  to provide designing without using css
