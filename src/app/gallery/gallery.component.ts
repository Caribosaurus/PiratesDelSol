import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  cards:Array<any> = [
    {
      image: "/assets/img/gallery/1.png",
      thumbnail:"/assets/img/gallery/Thumbnail/1.png",
      title: "Johnny"
    },
    {
      image: "/assets/img/gallery/2.png",
      thumbnail:"/assets/img/gallery/Thumbnail/2.png",
      title: "Jumbo"
    },
    {
      image: "/assets/img/gallery/3.png",
      thumbnail:"/assets/img/gallery/Thumbnail/3.png",
      title: "Jumbo"
    },
    {
      image: "/assets/img/gallery/4.png",
      thumbnail:"/assets/img/gallery/Thumbnail/4.png",
      title: "Jumbo"
    },
    {
      image: "/assets/img/gallery/5.png",
      thumbnail:"/assets/img/gallery/Thumbnail/5.png",
      title: "Jumbo"
    },

    {
      image: "/assets/img/gallery/6.png",
      thumbnail:"/assets/img/gallery/Thumbnail/6.png",
      title: "Jumbo"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
