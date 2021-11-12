import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadmapItems: Array<any> = [
    {title:'we do the things'},
    {title:'we sell the things'},
    {title:'we sell more things'},
    {title:'we more of the things'},
    {title:'we more, but even of the things'},
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
