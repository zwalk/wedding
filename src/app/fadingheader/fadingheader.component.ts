import { Component, AfterViewInit, HostBinding } from '@angular/core';
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

export class FadingheaderComponent implements AfterViewInit {

  private isVisible = true;
  isOpen = false;

@HostBinding('@toggle')
get toggle(): VisibilityState {
  return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
}

  constructor() { }

  ngAfterViewInit() {
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

}
