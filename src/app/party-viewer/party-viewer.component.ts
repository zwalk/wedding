import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-party-viewer',
  templateUrl: './party-viewer.component.html',
  styleUrls: ['./party-viewer.component.css']
})
export class PartyViewerComponent implements OnInit {

  placeholder: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  + 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit'
  + 'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
  + 'qui officia deserunt mollit anim id est laborum.';

  bridesmaids = [
    {
      imgSrc: '../../assets/img/capmarvelshop.png',
      imgSize: '15%',
      name: 'Madelyn (Maddy) Gloyd',
      description: this.placeholder,
      detailSize: '35%',
      relation: 'Maid of Honor - Sister of the Bride'
    },
    {
      imgSrc: '../../assets/img/gamoracourtney.png',
      imgSize: '16%',
      name: 'Courtney Ours',
      description: this.placeholder,
      detailSize: '37%',
      relation: 'Matron of Honor - Friend of Bride since Grade School'
    },
    {
      imgSrc: '../../assets/img/teenagewarheadchelsea.png',
      imgSize: '11%',
      name: 'Chelsea Brewer',
      description: this.placeholder,
      detailSize: '25%',
      relation: 'Bridesmaid - Friend of Bride since Grade School'
    },
    {
      imgSrc: '../../assets/img/wonderwomankelly.png',
      imgSize: '14%',
      name: 'Kelly Maconachy',
      description: this.placeholder,
      detailSize: '30%',
      relation: 'Bridesmaid - College Roommate of Bride'
    },
    {
      imgSrc: '../../assets/img/supergirllaura.png',
      imgSize: '15%',
      name: 'Laura Lewis',
      description: this.placeholder,
      detailSize: '32%',
      relation: 'Bridesmaid - Friend / Sister-in-law of Bride'
    },
    {
      imgSrc: '../../assets/img/BlackWidowKaylena.png',
      imgSize: '27%',
      name: 'Kaylena (Kiki) Metheny',
      description: this.placeholder,
      detailSize: '55%',
      relation: 'Matron of Honor - Cousin of the Bride'
    }
  ];

  groomsmen = [
    {
      imgSrc: '../../assets/img/eddybatman.png',
      imgSize: '20%',
      name: 'Eddy Boerstler',
      description: this.placeholder,
      detailSize: '48%',
      relation: 'Groomsman - Friend of Groom / Brother of Bride'
    },
    {
      imgSrc: '../../assets/img/sakicaptamerica.png',
      imgSize: '12%',
      name: 'Ashton (Saki) Gaitanos',
      description: this.placeholder,
      detailSize: '32%',
      relation: 'Groomsman - Friend of Groom since Grade School'
    },
    {
      imgSrc: '../../assets/img/stephenironmanfinal.png',
      imgSize: '12%',
      name: 'Stephen Tornero',
      description: this.placeholder,
      detailSize: '40%',
      relation: 'Best Man - Brother of the Groom'
    },
    {
      imgSrc: '../../assets/img/hulktransparent.png',
      imgSize: '21%',
      name: 'Nate Victor',
      description: this.placeholder,
      detailSize: '49%',
      relation: 'Groomsman - College Friend of the Groom'
    },
    {
      imgSrc: '../../assets/img/zachwolverine.png',
      imgSize: '14%',
      name: 'Zach Walker',
      description: this.placeholder,
      detailSize: '35%',
      relation: 'Best Man - Friend of Groom since Grade School'
    },
    {
      imgSrc: '../../assets/img/tylerstarlord.png',
      imgSize: '11%',
      name: 'Tyler Higgins',
      description: this.placeholder,
      detailSize: '26%',
      relation: 'Groomsman - Friend of Groom since Grade School'
    },
    {
      imgSrc: '../../assets/img/cliffbeast.png',
      imgSize: '12%',
      name: 'Cliff Fox',
      description: this.placeholder,
      detailSize: '29%',
      relation: 'Groomsman - College Friend of the Groom'
    }
  ];

  selectedPerson: Person;

  constructor() { }

  ngOnInit() {
  }

  select(person: Person) {
    this.selectedPerson = person;
    document.querySelector('.tile').innerHTML = "<img src='" + person.imgSrc + `' style='width: ${person.detailSize}; max-height: 600px'/>`
    + `<p style="width: 50%; margin-left: 3%; margin-right: 3%;"><b>${person.name}</b>` + "</br>" 
    + `<i>${person.relation}</i></br>` + `${person.description}</p>`;
  }

}
