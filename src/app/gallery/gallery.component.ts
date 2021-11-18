import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  cards:Array<any> = [
    {
      image: "/assets/img/johnny-depp-pirates.jpg",
      thumbnail:"/assets/img/johnny-depp-pirates.jpg",
      title: "Johnny"
    },
    {
      image: "/assets/pictures/placeholder/1920x1080.svg",
      thumbnail:"/assets/pictures/placeholder/640x430.svg",
      title: "Jumbo"
    },
    {
      image: "/assets/pictures/placeholder/1920x1080.svg",
      thumbnail:"/assets/pictures/placeholder/640x430.svg",
      title: "Jumbo"
    },
    {
      image: "/assets/pictures/placeholder/1920x1080.svg",
      thumbnail:"/assets/pictures/placeholder/640x430.svg",
      title: "Jumbo"
    },
    {
      image: "/assets/pictures/placeholder/1920x1080.svg",
      thumbnail:"/assets/pictures/placeholder/640x430.svg",
      title: "Jumbo"
    },

    {
      image: "/assets/pictures/placeholder/1920x1080.svg",
      thumbnail:"/assets/pictures/placeholder/640x430.svg",
      title: "Jumbo"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
