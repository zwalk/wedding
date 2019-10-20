import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {

  @HostListener('click', ['$event']) scrollToDivOnClick(event: any) {
    let element = document.getElementById(event.target.innerText.toLowerCase());

    const navHeight = document.querySelector('.nav-container').scrollHeight;
    window.scrollTo({top: (element.getBoundingClientRect().top - document.body.getBoundingClientRect().top) - navHeight});
  }

}
