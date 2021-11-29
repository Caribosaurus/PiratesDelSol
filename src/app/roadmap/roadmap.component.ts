import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadmapItems: Array<any> = [
    {
      title:'The Golden Sol departure', 
      image:'/assets/img/Roadmap/Roadmap_1.png', 
      description: 'The 5000 male pirates collection launch',
      date: "Q1 2022"
    },
    {
      title:'Treasure Chest Island', 
      image:'/assets/img/Roadmap/Roadmap_2.png', 
      description: 'Our community chest starts to fill up!',
      date: "Q1 2022"
    },
    {
      title:'Challenge Island', 
      image:'/assets/img/Roadmap/Roadmap_3.png', 
      description: "Come gamble your NFT's into a 50/50 chance duel.",
      date: "Q1 2022"
    },
    {
      title:'Blackmarket #1', 
      image:'/assets/img/Roadmap/Roadmap_4.png', 
      description: 'The first Blackmarket is discovered, 5000 weapons will be available for our fellow mateys!',
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
      description: 'Come celebrate our Mid-Roadmap birthday ! 76% of the royalties given back to the community.',
      date: "June 2022"
    },
    {
      title:'The Golden Sol rescue', 
      image:'/assets/img/Roadmap/Roadmap_7.png', 
      description: 'We rescue a unknown sinking ship ! The 5000 female pirates collection launch.',
      date: "July 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_8.png', 
      description: '',
      date: ""
    },
    {
      title:'Blackmarket #2', 
      image:'/assets/img/Roadmap/Roadmap_9.png', 
      description: 'We discover the second blackmarket! 5000 pirates companions are available for adoption.',
      date: "September 2022"
    },
    {
      title:'Community chosen charity donation', 
      image:'/assets/img/Roadmap/Roadmap_10.png', 
      description: 'Come vote to choose a charitable organization.',
      date: "October 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_11.png', 
      description: '',
      date: ""
    },
    {
      title:'Pirate Love Island', 
      image:'/assets/img/Roadmap/Roadmap_12.png', 
      description: 'A terrible event happens! Gen2 and Baby pirates announced!',
      date: "December 2022"
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
