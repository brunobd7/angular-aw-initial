import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'instaciaDiretivaCampoColorido'
})
export class CampoColoridoDirective {

  @Input() color = 'grey';
 
  @HostBinding('style.backgroundColor') backColor: string = 'transparent';
  
  // constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { 
    
  // }

  //DECORATOR - ANNOTATION TO LISTENER EVENTS
  @HostListener('focus')
  addColorField(){

    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');

    // this.backColor = 'red';
    this.backColor = this.color;

  }

  
  @HostListener('blur')
  removeColorField(){

    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','white');
    this.backColor = 'transparent';
  }
  

}
