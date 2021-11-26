import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadmapItems: Array<any> = [
    {
      title:'Mint Day', 
      image:'/assets/img/Roadmap/Roadmap_1.png', 
      description: 'We launch our original collection',
      date: "January 2022"
    },
    {
      title:'Treasure Island', 
      image:'/assets/img/Roadmap/Roadmap_2.png', 
      description: 'Our community chest starts to fill up!',
      date: "January 2022"
    },
    {
      title:'Challenge Island', 
      image:'/assets/img/Roadmap/Roadmap_3.png', 
      description: 'You will be able to duel other pirates!',
      date: "March 2022"
    },
    {
      title:'Underground Market', 
      image:'/assets/img/Roadmap/Roadmap_4.png', 
      description: 'The underground market opens, 5000 weapons will be available!',
      date: "April 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_5.png', 
      description: '',
      date: ""
    },
    {
      title:'Summer Party Island', 
      image:'/assets/img/Roadmap/Roadmap_6.png', 
      description: '',
      date: "June 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_7.png', 
      description: 'Female Collection Launch',
      date: "July 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_8.png', 
      description: '',
      date: ""
    },
    {
      title:'Underground Market Reopening', 
      image:'/assets/img/Roadmap/Roadmap_9.png', 
      description: '5000 companion will be available',
      date: "September 2022"
    },
    {
      title:'Donations', 
      image:'/assets/img/Roadmap/Roadmap_10.png', 
      description: 'Community based charitable donations',
      date: "October 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_11.png', 
      description: '',
      date: ""
    },
    {
      title:'Love Island', 
      image:'/assets/img/Roadmap/Roadmap_12.png', 
      description: 'Pirates 2nd generation!',
      date: "December 2022"
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
