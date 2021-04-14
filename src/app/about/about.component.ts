import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faHotel, faGift, faReply } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  faReply = faReply;
  faGift = faGift;
  faHotel = faHotel;
  isIEOrEdge: boolean;
  aboutPosition: number;
  windowWidth: number;
  isGiftsSelected: boolean;
  isHotelsSelected: boolean;

  constructor() {}

  ngAfterViewInit() {
    document.querySelector('path').classList.add('icon');
  }

  ngOnInit() {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
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
