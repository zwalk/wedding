import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {

  @HostListener('click', ['$event']) scrollToDivOnClick(event: any) {
    const element = document.getElementById(event.target.innerText.toLowerCase());

    const navHeight = document.querySelector('nav').scrollHeight;
    window.scrollTo({top: (element.getBoundingClientRect().top - document.body.getBoundingClientRect().top) - navHeight});
  }

}
