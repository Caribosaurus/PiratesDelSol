import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  teamMembers: Array<any> = [
    {
      name: "Natalia Scrilsen",
      role: "Vaterian",
      description:"Quisque sit amet ex id lacus ullamcorper consectetur. Phasellus cursus arcu quam, vel porttitor magna efficitur ac.",
      image: "/assets/pictures/placeholder/250x250.svg",
      socials: {
        facebook: "https://facebook.com",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Natalia Scrilsen",
      role: "Vaterian",
      description:"Quisque sit amet ex id lacus ullamcorper consectetur. Phasellus cursus arcu quam, vel porttitor magna efficitur ac.",
      image: "/assets/pictures/placeholder/250x250.svg",
      socials: {
        facebook: "",
        twitter: "https://facebook.com",
        linkedin: ""
      }
    },
    {
      name: "Natalia Scrilsen",
      role: "Vaterian",
      description:"Quisque sit amet ex id lacus ullamcorper consectetur. Phasellus cursus arcu quam, vel porttitor magna efficitur ac.",
      image: "/assets/pictures/placeholder/250x250.svg",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: "https://facebook.com"
      }
    },
    {
      name: "Natalia Scrilsen",
      role: "Vaterian",
      description:"Quisque sit amet ex id lacus ullamcorper consectetur. Phasellus cursus arcu quam, vel porttitor magna efficitur ac.",
      image: "/assets/pictures/placeholder/250x250.svg",
      socials: {
        facebook: "https://facebook.com",
        twitter: "",
        linkedin: ""
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
