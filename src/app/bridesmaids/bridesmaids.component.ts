import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, HostListener } from '@angular/core';
import { Person } from '../person';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { filter, map, throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

enum VisibilityState {
  Hidden = 'Hidden',
  Visible = 'Visible'
}

@Component({
  selector: 'app-bridesmaids',
  templateUrl: './bridesmaids.component.html',
  styleUrls: ['./bridesmaids.component.css'],
  animations: [
    trigger('slideLeft', [
      state(
        VisibilityState.Hidden,
        style({transform: 'translateX(100%)'})
      ),
      state(
        VisibilityState.Visible,
        style({transform: 'translateX(0)'})
      ),
      transition('* => *', animate('1750ms'))
    ]),
    trigger('slideRight', [
      state(
        VisibilityState.Hidden,
        style({transform: 'translateX(-100%)'})
      ),
      state(
        VisibilityState.Visible,
        style({transform: 'translateX(0)'})
      ),
      transition('* => *', animate('1750ms'))
    ])
  ]
})
export class BridesmaidsComponent implements OnInit, AfterViewInit {

  @Input()  people: Person[];
  @Output() selectHero: EventEmitter<Person> = new EventEmitter<Person>();
  @Input() isBridesmaids: boolean;
  private areBridesmaidsVisible = false;
  private areGroomsmenVisible = false;
  private bridesmaidsHeight: number;
  private groomsmenHeight: number;
  private isIEOrEdge: boolean;

  constructor() {
   }

  ngOnInit() {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }

  ngAfterViewInit() {

    if (this.isIEOrEdge) {
      this.areBridesmaidsVisible = true;
      this.areGroomsmenVisible = true;
    }

    if (this.bridesmaidsHeight == null || this.groomsmenHeight == null) {
      this.calculatePositions();
    }

    const $animate = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset)
  );

    const $animateBridesmaids = $animate.pipe(
      filter(pageY => pageY + (window.innerHeight / 2) >= this.bridesmaidsHeight)
    );

    if (this.isBridesmaids) {
      $animateBridesmaids.subscribe(() => this.areBridesmaidsVisible = true);
    }

    const $animateGroomsmen = $animate.pipe(
      filter(pageY => pageY + (window.innerHeight / 2)>= this.groomsmenHeight)
    );

    if (!this.isBridesmaids) {
      $animateGroomsmen.subscribe(() => this.areGroomsmenVisible = true);
    }

  }

  getSize(person: Person): string {
    return person.imgSize;
  }

  select(person: Person) {
    this.selectHero.emit(person);
  }

  getBridesmaidsState() {
    return this.areBridesmaidsVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  getGroomsmenState() {
    return this.areGroomsmenVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  @HostListener('window:resize')
  reCalculatePositions() {
    this.calculatePositions();
  }

  calculatePositions() {
    const pageTop = document.body.getBoundingClientRect().top;
    this.bridesmaidsHeight = document.querySelector('#bridesmaids').getBoundingClientRect().bottom - pageTop;
    this.groomsmenHeight = document.querySelector('#groomsmen').getBoundingClientRect().bottom - pageTop;
  }

}
