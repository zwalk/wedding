import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { throttleTime, map, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { faHotel, faGift, faReply } from '@fortawesome/free-solid-svg-icons';

enum VisibilityState {
  Visible = 'Visible',
  Hidden = 'Hidden'
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('scrollAnimation', [
        state(
          VisibilityState.Hidden,
          style({opacity: 0})
        ),
        state(
          VisibilityState.Visible,
          style({opacity: 1}),
        ),
        transition('* => *', animate('650ms ease-in'))
    ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {

  faReply = faReply;
  faGift = faGift;
  faHotel = faHotel;
  isIEOrEdge: boolean;
  private isShown = false;
  aboutPosition: number;
  private hasAboutPositionBeenFound = false;
  windowWidth: number;
  isGiftsSelected: boolean;
  isHotelsSelected: boolean;

  getToggle(): VisibilityState {
    return this.isShown ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor() {
    this.calculateWindowWidth();
    if (this.windowWidth <= 1024) {
      this.isShown = true;
    }
   }

  ngAfterViewInit() {
    if (!this.hasAboutPositionBeenFound) {
      this.calculateAboutPosition();
    }

    const $animate = fromEvent(window, 'scroll').pipe(
        throttleTime(10),
        map(() => window.pageYOffset),
        filter(pageY => pageY + (window.innerHeight / 2) >= this.aboutPosition )
    );

    if (this.aboutPosition != null) {
      $animate.subscribe(() => this.isShown = true);
    }

  }

  ngOnInit() {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateAboutPosition();
    this.calculateWindowWidth();
  }

  calculateAboutPosition() {
    const aboutBoundingClientRect = document.querySelector('#info').getBoundingClientRect();
    this.aboutPosition = aboutBoundingClientRect.top + 50;
  }

  calculateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

  goToUrl(url) {
    window.open(url, '_blank');
  }

  showLinks(linkType) {
    if (linkType === 'gifts') {
      if (this.isGiftsSelected) {
        this.isGiftsSelected = false;
      } else {
        this.isGiftsSelected = true;
        this.isHotelsSelected = false;
      }
    } else if (linkType === 'hotels') {
      if (this.isHotelsSelected) {
        this.isHotelsSelected = false;
      } else {
        this.isHotelsSelected = true;
        this.isGiftsSelected = false;
      }
    }
  }

}
