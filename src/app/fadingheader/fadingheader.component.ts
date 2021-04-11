import { Component, AfterViewInit, HostBinding, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';
import { trigger, style, state, transition, animate } from '@angular/animations';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

@Component({
  selector: 'app-fadingheader',
  templateUrl: './fadingheader.component.html',
  styleUrls: ['./fadingheader.component.css'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({opacity: 0, transform: 'translateY(-100%)'})
        ),
      state(
        VisibilityState.Visible,
        style({opacity: 1, transform: 'translateY(0)'})
      ),
      transition('* => *', animate('250ms ease-in'))
    ])
  ]
})

export class FadingheaderComponent implements AfterViewInit, OnInit {

  private isVisible = true;
  isOpen = false;
  isIEOrEdge: boolean;
  currentActive: number;
  scrollHeight: number;
  homeHeight: number;
  aboutHeight: number;
  bridesmaidsHeight: number;
  groomsmenHeight: number;
  ringBearersHeight: number;
  dogsHeight: number;
  haveHeightsBeenCalculated = false;

@HostListener('window:scroll')
checkForActiveComponent() {
  this.calculateScrollHeight();

  if (!this.haveHeightsBeenCalculated) {
    this.calculateHeights();
    this.haveHeightsBeenCalculated = true;
  }

  if (this.scrollHeight >= this.homeHeight) {
    this.currentActive = 1;
  }
  if (this.scrollHeight + (window.innerHeight / 2) >= this.aboutHeight) {
    this.currentActive = 2;
  }
  if (this.scrollHeight + (window.innerHeight / 2) >= this.bridesmaidsHeight) {
    this.currentActive = 3;
  }
  if (this.scrollHeight + (window.innerHeight / 2) >= this.groomsmenHeight) {
    this.currentActive = 4;
  }
  if (this.scrollHeight + (window.innerHeight / 2) >= this.ringBearersHeight) {
    this.currentActive = 5;
  }
  if (this.scrollHeight + (window.innerHeight / 2) >= this.dogsHeight) {
    this.currentActive = 6;
  }
  if (this.scrollHeight === 0) {
    this.currentActive = 0;
  }
}

@HostListener('window:resize')
onResize() {
  this.calculateHeights();
  this.calculateScrollHeight();
}

getToggle(): VisibilityState {
  return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
}

  constructor() { }

  ngOnInit() {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }

  ngAfterViewInit() {
    this.calculateScrollHeight();

    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => this.isVisible = true);

    scrollDown$.subscribe(() => {
      this.isVisible = false;
      this.isOpen = false;
    });
  }

  changeOpen(): void {
    this.isOpen = !this.isOpen;
  }

  closeWarning(): void {
    this.isIEOrEdge = false;
  }

  calculateHeights(): void {
    const pageTop = document.body.getBoundingClientRect().top;
    this.homeHeight = document.querySelector('#home').getBoundingClientRect().top - pageTop;
    this.aboutHeight = document.querySelector('#info').getBoundingClientRect().top - pageTop;
    this.bridesmaidsHeight = document.querySelector('#bridesmaids').getBoundingClientRect().top - pageTop;
    this.groomsmenHeight = document.querySelector('#groomsmen').getBoundingClientRect().top - pageTop;
    this.ringBearersHeight = document.querySelector('app-ringbearer').getBoundingClientRect().top - pageTop;
    this.dogsHeight = document.querySelector('#dogs').getBoundingClientRect().top - pageTop;
  }

  calculateScrollHeight() {
    this.scrollHeight = window.pageYOffset;
  }

}
