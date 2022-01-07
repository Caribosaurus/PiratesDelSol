import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  cards:Array<any> = [
    {
      image: "/assets/img/gallery/M7.png",
      thumbnail:"/assets/img/gallery/M7.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M10.png",
      thumbnail:"/assets/img/gallery/M10.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M11.png",
      thumbnail:"/assets/img/gallery/M11.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M12.png",
      thumbnail:"/assets/img/gallery/M12.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M18.png",
      thumbnail:"/assets/img/gallery/M18.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M17.png",
      thumbnail:"/assets/img/gallery/M17.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M16.png",
      thumbnail:"/assets/img/gallery/M16.png",
      title: ""
    },

    {
      image: "/assets/img/gallery/M13.png",
      thumbnail:"/assets/img/gallery/M13.png",
      title: ""
    },
    {
      image: "/assets/img/gallery/M9.png",
      thumbnail:"/assets/img/gallery/M9.png",
      title: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
