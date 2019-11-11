import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  scrollHeight: number;
  isIEOrEdge: boolean;

  @HostListener('window:scroll')
  findScrollHeight() {
    this.scrollHeight = window.pageYOffset;
  }

  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

}
