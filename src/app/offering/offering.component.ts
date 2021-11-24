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
      icon: "/assets/icons/Treasure_chest.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Token Reward System",
      icon: "/assets/icons/Token.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Reduce supply / Increase scarcity mechanism",
      icon: "/assets/icons/Chart.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Handmade Artwork with rarity traits",
      icon: "/assets/icons/Ranks.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Gamble your NFT's mini games",
      icon: "/assets/icons/Dice.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },
    {
      title: "Community charitable donation",
      icon: "/assets/icons/Charity.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies dui, et posuere lacus. Vestibulum accumsan justo eget justo rhoncus convallis."
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
