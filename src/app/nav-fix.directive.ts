import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavFix]'
})
export class NavFixDirective {

  @HostListener('window:scroll') fixNav(): void {
    if (window.pageYOffset === 0) {
      const navContainer = document.querySelector('.nav-container');
      navContainer.classList.remove('fixed');
      const navElem = document.querySelector('nav');
      navElem.classList.remove('nav-fix');
    } else {
      const navContainer = document.querySelector('.nav-container');
      navContainer.classList.add('fixed');
      const navElem = document.querySelector('nav');
      navElem.classList.add('nav-fix');
    }

  }

}
