import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-party-viewer',
  templateUrl: './party-viewer.component.html',
  styleUrls: ['./party-viewer.component.css']
})
export class PartyViewerComponent implements OnInit {

  bridesmaids = [
    {
      imgSrc: '../../assets/img/capmarvelshop.png',
      imgSize: '15%',
      name: 'Madelyn (Maddy) Gloyd',
      nicknames: 'AKA Maddy-faddy-laddy-paddy-daddy AKA Madelyn-Elizabeef',
      description: 'Miranda waited 9 years for a little sister. After years of dressing up her little brothers, '
      + 'making them learn choreographed dances and karaoke-ing Spice girls she got her wish. Maddy is a lot like '
      + 'Miranda. They played softball and cheerleading in school. They both love food and will fight you if you take '
      + 'their leftovers. They both have a good sense of humor/enjoy tormenting Shana. They are both doggo-mothers. '
      + 'And even though they do not like to admit it they are both sometimes overly sensitive. Maddy is on her way to '
      + 'becoming a nurse.  Miranda is incredibly proud of the path she is on and the drive she has to meet her goals, '
      + 'despite obstacles she has faced.',
      detailSize: '35%',
      relation: '(Maid of Honor - Sister of the Bride)'
    },
    {
      imgSrc: '../../assets/img/gamoracourtney.png',
      imgSize: '16%',
      name: 'Courtney Ours',
      description: 'Courtney and Miranda started hanging out the summer before 8th grade, after they met at cheerleading tryouts. '
      + 'They cheered, played softball together and walked around the Lake. They spent every weekend at each other\'s houses. People'
      + ' used to ask them if they were twins which they always replied, yes!  Miranda was Courtney and her husband, Brandon\'s third'
      + ' wheel for a few summers. Courtney and Brandon have 2 amazing boys, Logan and Eli. Miranda and Courtney now enjoy dancing and'
      + ' playing games when together. Miranda and Courtney both also have passions in the health care field. Courtney is going to school '
      + 'to be a Surgical Technician. Miranda has always admired Courtney\'s boldness/ability to talk to anyone and credits some of her '
      + 'own confidence to Courtney.',
      detailSize: '37%',
      relation: '(Matron of Honor - Friend of Bride since Grade School)'
    },
    {
      imgSrc: '../../assets/img/teenagewarheadchelsea.png',
      imgSize: '11%',
      name: 'Chelsea Brewer',
      description: 'Chelsea and Miranda have actually known each other since before kindergarten, but did not start '
      + 'hanging out until they were 8. They would knock on each others doors and stand at the end of each others '
      + 'driveways and ask "if that girl was home." From there they would run the streets of Hebron playing flash '
      + 'light tag, flag football and jump on the trampoline. They would spend their weekends at softball tournaments '
      + 'then each others houses where Miranda\'s dad always joked that Chelsea was their "red-headed step child." '
      + 'Chelsea and Miranda now enjoy hanging out with family together and eating Chinese food. Chelsea and her long '
      + 'time boyfriend Wes have a little boy, Colt. Chelsea is a cancer survivor and is one of the strongest people '
      + 'Miranda has ever met. ',
      detailSize: '25%',
      relation: '(Bridesmaid - Friend of Bride since Grade School)'
    },
    {
      imgSrc: '../../assets/img/wonderwomankelly.png',
      imgSize: '14%',
      name: 'Kelly Maconachy',
      description: 'Kelly and Miranda met during their OB clinical while attending nursing school at The Ohio State University '
      + '(GO BUCKS). After only knowing each other for a quarter Miranda asked Kelly to move in with her for Senior year. Miranda '
      + 'still does not really know why Kelly said yes to moving in with a stranger (#college) but it was the start of a beautiful '
      + 'friendship. They have similar interests in music, cheese and dogs. Kelly and Chris have a similar sense of humor and similar '
      + 'interests in music and television. Kelly is a mother to a beautiful dog named Zoey, who gets along fabulously with Miranda '
      + 'and Chris\' dogs. Miranda loves that Kelly is always down to do something and is the life of the party, while also being one '
      + 'of the sweetest and authentic people she has met.',
      detailSize: '30%',
      relation: '(Bridesmaid - College Roommate of Bride)'
    },
    {
      imgSrc: '../../assets/img/supergirllaura.png',
      imgSize: '15%',
      name: 'Laura Lewis',
      description: 'Laura and Miranda met in high school. Trent (Miranda\'s brother and Laura\'s husband) had invited them both '
      + 'to get wings at Jacktown pub after school. Trent and Laura weren\'t dating yet but Miranda knew something was there. '
      + 'Miranda and Laura like to joke that Laura only married Trent so she would be in Miranda\'s life forever.  Laura and Trent '
      + 'are often travel partners with Miranda and Chris whether it\'s Nashville, Mexico, Dominican Republic or just Columbus for '
      + 'a night. Laura is also always down to play games and sing songs with Chris and Miranda. "Party for two" is a fan fave! '
      + 'Miranda has always admired Laura\'s kindness and her selflessness and aspires to learn Laura\'s ways.',
      detailSize: '32%',
      relation: '(Bridesmaid - Friend / Sister-in-law of Bride)'
    },
    {
      imgSrc: '../../assets/img/kaylenacatwoman.png',
      imgSize: '19%',
      name: 'Kaylena (Kiki) Metheny',
      description: 'Kiki and Miranda are cousins, but growing up they were always together like sisters. They used to '
      + '(think that they) ran the playgrounds with their brothers as kids. They enjoyed being active by hiking in the '
      + 'woods, playing softball in school and riding horses together. Now their hang outs include wrangling Kiki\'s two '
      + 'boys (the ring bearers, Wyatt and Ridge.) As well as spending quality family time together with everyone including '
      + 'Kiki\'s husband, Connor and Chris. Miranda takes credit for introducing Kiki and Connor as her and Connor were friends'
      + ' from grade school. Miranda looks up to Kiki when it comes to her patience and energy level as a stay at home mom, and '
      + 'knows she will be a great resource for when Miranda and Chris start a family. ',
      detailSize: '40%',
      relation: '(Matron of Honor - Cousin of the Bride)'
    }
  ];

  groomsmen = [
    {
      imgSrc: '../../assets/img/eddybatman.png',
      imgSize: '20%',
      name: 'Eddy Boerstler',
      description: 'Chris and Eddy became good friends through his sister (the Bride) Miranda. Eddy and Chris first spent time together '
      + 'when he came to "Rock on the Range" in Columbus. The two had a blast together and a lifetime friendship was formed. Eddy '
      + 'attended college at The Ohio State University while Chris and Miranda were working at OSU Medical Center and were able to hang '
      + 'out quite a bit. Eddy is now graduated and still living at in Columbus. Chris and Miranda always look forward to hanging out '
      + 'with Eddy and girlfriend Sami when they are back home.',
      detailSize: '48%',
      relation: '(Groomsman, Brother of the Bride, friend of the Groom)'
    },
    {
      imgSrc: '../../assets/img/sakicaptamerica.png',
      imgSize: '12%',
      name: 'Ashton (Saki) Gaitanos',
      description: 'Chris and Saki have known each other since elementary school but became closer in High School when their very '
      + 'good mutual friend Ryan Aguire talked them both into running cross-country. Saki and Chris then both attended The Ohio State '
      + 'University together became even closer and bonded over a love for blues music and vinyl records. After undergrad the two were '
      + 'roommates while Saki was in law school and Chris started his nursing career in Columbus. Saki is now a Lawyer living in '
      + 'Columbus Ohio with his long time girlfriend Marie Ragias. Chris and Saki make efforts to see one another whenever they are '
      + 'both in Columbus and have plans to go to Memphis Tennessee and Austin Texas together soon to listen to live music.',
      detailSize: '32%',
      relation: '(Groomsman, Grade school friend of the Groom)'
    },
    {
      imgSrc: '../../assets/img/stephenironmanfinal.png',
      imgSize: '12%',
      name: 'Stephen Tornero',
      description: 'Stephen is Chris\' older and only brother. Chris has always looked up to Stephen as a role model and inspiration. '
      + 'Stephen is an Art teacher for Plain Local Schools and an accomplished artist himself. He is exceptionally gifted in textile '
      + 'weaving and won first prize for a piece in the Stark County Artists Exhibition. Stephen and Chris bonded early on over a love '
      + 'for music and comics. Chris was always stealing his older borther\'s CDs and learned how to read by reading Stephens old '
      + 'Garfield and Calvin and Hobbes books. Chris and Miranda have asked Stephen to Officiate their wedding because he is Chris\' '
      + 'only brother and they want him to have a special role in their Ceremony but also in the rest of their lives as a family.',
      detailSize: '40%',
      relation: '(Brother of the Groom, Best man, Officiant)'
    },
    {
      imgSrc: '../../assets/img/natehulk.png',
      imgSize: '21%',
      name: 'Nate Victor',
      description: 'Nate and Chris met through mutual friends in Ski Club at The Ohio State University. Nate is an ambitious, self '
      + 'taught, computer wiz with a big heart. Chris and Nate bonded during weekend Ski trips during college. The trips were such a '
      + 'blast that they have become a beloved annual tradition. Chris can always count on Nate to plan a visit to wherever He and '
      + 'Miranda are traveling or to come see them in Columbus.',
      detailSize: '48%',
      relation: '(Groomsman, College friend of the Groom)'
    },
    {
      imgSrc: '../../assets/img/zachwolverine.png',
      imgSize: '14%',
      name: 'Zach Walker',
      description: 'Zach and Chris became friends way back in elementary school. They became close while playing football in middle '
      + 'school and the two, along with Mike Vignos and Tyler HIggins were pretty much inseparable. Zach and Chris went on to both get '
      + 'into The Ohio State University and became roommates Sophomore year. The following 2 years Zach and Chris lived together again '
      + 'and hung out constantly with roommates Mike, Rob, Nate and Pete. The group devised a plan to sell their yard out as parking '
      + 'spaces for the home football games which funded a few house parties every year. A few years after college Zach was visiting '
      + 'Chris after he had bought his house in Columbus. Chris talked Zach into moving back to Columbus to be his roommate once again '
      + 'and they are both still living there today. Zach has also just started a great new career in Coding with Nationwide in Columbus.',
      detailSize: '35%',
      relation: '(Bestman, Grade school friend of Groom, Long time roommate of Bride and Groom)'
    },
    {
      imgSrc: '../../assets/img/tylerstarlord.png',
      imgSize: '11%',
      name: 'Tyler Higgins',
      description: 'Tyler is a Captain in the United States Army, a dedicated fitness guru, and avid donut eater. Tyler is one '
      + 'of Chris\' oldest and dearest friends. They have been coworkers, teammates, workout partners, snowboarding buddies, road trip '
      + 'co-captains and above all great friends. Despite going to different colleges and living on different sides of the country for '
      + 'years now the two remain close. Miranda and Chris had the privilege of visiting Tyler, and long time Girlfriend Chelsey, in '
      + 'Hawaii, where they are both stationed for the Army. Miranda and Chris  had the trip of a lifetime and enjoyed living like '
      + 'locals if only for a week. They hope to visit again soon!',
      detailSize: '26%',
      relation: '(Groomsman, Grade school friend of the Groom)'
    },
    {
      imgSrc: '../../assets/img/cliffbeast.png',
      imgSize: '12%',
      name: 'Cliff Fox',
      description: 'Cliff and Chris met through Ski Club at The Ohio State University during the 24hr+ bus ride to Breckenridge '
      + 'Colorado. Cliff sat across from Chris and other future groomsmen Tyler Higgins and bonded over that long long fun ride. '
      + 'Chris was soon at Cliffs house nearly every weekend and had became good friends with Cliff and all his roommates in his '
      + 'college house "The Church". Cliff Still visits Columbus from time to time to watch Ohio State football and see Chris and '
      + 'Miranda. However, he now resides with his beautiful wife Erica in Portland, OR. Chris and Miranda hope to visit their new '
      + 'home soon!',
      detailSize: '29%',
      relation: '(Groomsman, College friend of the Groom)'
    }
  ];

  selectedPerson: Person;

  constructor() { }

  ngOnInit() {
  }

  select(person: Person) {
    this.selectedPerson = person;
  }

  getDetailSize(person: Person): string {
    return person.detailSize;
  }

}
