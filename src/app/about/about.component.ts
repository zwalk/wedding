import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter, HostListener, ElementRef, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { throttleTime, map, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

enum ShowState {
  show = 'show',
  hide = 'hide'
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('scrollAnimation', [
      transition('* => *', [
        state(
          ShowState.hide,
          style({opacity: 0, transform: 'translateY(-100px)'})
        ),
        state(
          ShowState.show,
          style({opacity: 0, transform: 'translateY(-100px)'}),
        ),
        transition('* => *', animate('250ms ease-in'))
        // query('.about-container, .event-container', [
        //   style({opacity: 0, transform: 'translateY(-100px)'}),
        //   stagger(-30, [
        //     animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        //   ])
        // ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {

  @Input() scrollHeight: number;
  isIEOrEdge: boolean;
  public isShown = false;

  @HostBinding('@scrollAnimation')
  get shownState(): ShowState {
    return this.isShown ? ShowState.show : ShowState.hide;
  }

  constructor() { }

  ngAfterViewInit() {
    const pageTop = document.body.getBoundingClientRect().top;
    const aboutPosition = document.querySelector('#info').getBoundingClientRect().top - pageTop;
    if (!this.isShown) {
      fromEvent(window, 'scroll').pipe(
        throttleTime(10),
        map(() => window.pageYOffset),
        filter(pageY => pageY + (window.innerHeight / 2) >= aboutPosition )).subscribe(() => this.isShown = true);
    }
  }

  ngOnInit() {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }

}
