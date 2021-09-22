import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
 
  @HostBinding('style.backgroundColor') backColor: string = 'transparent';
  
  // constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { 
    
  // }

  //DECORATOR - ANNOTATION TO LISTENER EVENTS
  @HostListener('focus')
  onFieldFocus(){

    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');

    this.backColor = 'red';

  }

  
  @HostListener('blur')
  onFieldLeave(){

    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','white');
    this.backColor = 'transparent';
  }
  

}
