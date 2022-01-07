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
      description: 'Our Monthly Treasure Chest starts to fill up!',
      date: "Q1 2022"
    },
    {
      title:'Challenge Island', 
      image:'/assets/img/Roadmap/Roadmap_3.png', 
      description: "Anyone can gamble their Golden Tokens and NFTs in a casino fashion on The Challenge Island.",
      date: "Q1 2022"
    },
    {
      title:'Blackmarket #1', 
      image:'/assets/img/Roadmap/Roadmap_4.png', 
      description: 'The first Blackmarket is discovered, 5000 NFT Weapons will be available for our fellow Crewmen (Pirates Del Sol NFT owners)!',
      date: "April 2022"
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_5.png', 
      description: '',
      date: ""
    },
    {
      title:'', 
      image:'/assets/img/Roadmap/Roadmap_6.png', 
      description: '',
      date: ""
    },
    {
      title:'The Golden Sol rescue', 
      image:'/assets/img/Roadmap/Roadmap_7.png', 
      description: 'We will rescue an unknown sinking ship! The 5000 Female Pirates Collection Launch.',
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
      description: 'The second Blackmarket is discovered, 5000 NFT Companions will be available for our fellow Crewmen (Pirates Del Sol NFT owners)!',
      date: "September 2022"
    },
    {
      title:'Community chosen charity donation', 
      image:'/assets/img/Roadmap/Roadmap_10.png', 
      description: 'The community chooses a charitable organization that will receive a generous donation from the Pirates Del Sol NFT project.',
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
