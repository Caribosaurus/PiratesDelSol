import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  teamMembers: Array<any> = [

    {
      name: "Reshiram",
      role: "Founder",
      description:"",
      image: "/assets/img/OurTeam/2.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Laurelle",
      role: "Founder",
      description:"",
      image: "/assets/img/OurTeam/laurelle.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Caribosaurus",
      role: "Computer Magician",
      description:'',
      image: "/assets/img/OurTeam/6.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Gregov",
      role: "Artist",
      description:"",
      image: "/assets/img/OurTeam/gregov.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Savior",
      role: "Marketing Manager",
      description:"",
      image: "/assets/img/OurTeam/4.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Modking",
      role: "Community Manager",
      description:"",
      image: "/assets/img/OurTeam/5.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Freziz",
      role: "Community Manager",
      description:"",
      image: "/assets/img/OurTeam/3.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Sande",
      role: "QA",
      description:"",
      image: "/assets/img/OurTeam/sande.png",
      socials: {
        facebook: "",
        twitter: "",
        linkedin: ""
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
