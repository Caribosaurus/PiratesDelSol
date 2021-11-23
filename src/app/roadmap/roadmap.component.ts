import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadmapItems: Array<any> = [
    {
      title:'we do the things', 
      image:'/assets/img/zoltan-tasi.jpg', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.s',
      date: "January 2021"
    },
    {
      title:'we do the things', 
      image:'/assets/img/zoltan-tasi.jpg', 
      description: 'Ut eu tempor lectus. Nulla odio nisl, dictum id facilisis et, luctus varius nisi. Aliquam eu nisl sit amet diam convallis commodo.s',
      date: "January 2021"
    },
    {title:'we sell more things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
    {title:'we more, but even of the things', image:'/assets/img/zoltan-tasi.jpg'},
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
