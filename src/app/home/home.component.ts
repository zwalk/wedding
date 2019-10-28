import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scrollHeight: number;

  @HostListener('window:scroll')
  findScrollHeight() {
    this.scrollHeight = window.pageYOffset;
  }

  constructor() { }

  ngOnInit() {
  }

}
