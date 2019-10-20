import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-bridesmaids',
  templateUrl: './bridesmaids.component.html',
  styleUrls: ['./bridesmaids.component.css']
})
export class BridesmaidsComponent implements OnInit {

  @Input()  people: Person[];
  @Output() selectHero: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
   }

  ngOnInit() {
  }

  getSize(person: Person): string {
    return person.imgSize;
  }

  select(person: Person) {
    this.selectHero.emit(person);
  }

}
