import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss']
})
export class OfferingComponent implements OnInit {
  offerings: Array<any> = [
    {
      title: "Monthly income Treasure Chest",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Token Reward System",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Reduce supply / Increase scarcity mechanism",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Handmade Artwork with rarity traits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Gamble your NFT's mini games",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Community charitable donation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
