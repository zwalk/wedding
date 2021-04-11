import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit {

  @ViewChild('instagramiframe', {static: false}) iframe: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
