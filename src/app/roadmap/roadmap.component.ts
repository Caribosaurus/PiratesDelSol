import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadmapItems: Array<any> = [
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_1.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_2.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_3.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_4.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_5.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_6.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_7.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_8.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_9.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_10.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_11.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
    {
      title:'Placeholder', 
      image:'/assets/img/Roadmap/Roadmap_12.png', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.',
      date: "January 2021"
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
