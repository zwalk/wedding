import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {

  @HostListener('click', ['$event']) scrollToDivOnClick(event: any) {
    const element = document.getElementById(event.target.innerText.toLowerCase());

    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
