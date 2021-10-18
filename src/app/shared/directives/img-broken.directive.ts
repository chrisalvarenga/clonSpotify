import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void{
    const native = this.host.nativeElement
    native.src = 'https://th.bing.com/th/id/R.1bc124f5995b4666a87216d5121bdd35?rik=1szBHnlDlBHs%2fQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jHL9oo3T9yA%2fUCslneuE_MI%2fAAAAAAAAAOg%2fjH_N-cRKTAs%2fs1600%2fcartman.jpg&ehk=16%2fKSDW2fLvXmB1PVM1J43HkA46ifbHuY37exnUdSGw%3d&risl=&pid=ImgRaw&r=0';
  }
 
  constructor(private host: ElementRef) { }

}
