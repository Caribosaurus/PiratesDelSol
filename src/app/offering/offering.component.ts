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
      description: "Access to a monthly treasure chest which is filled with 38% of the royalties. \nEvery Crewman has access to an equal part of the treasure chest riches. In order to open it the Crewman needs 15 golden tokens."
    },
    {
      title: "Token Reward System",
      icon: "/assets/icons/Token.png",
      description: "Crewmen and Sailors can both do 5 tasks per week to receive golden tokens.\nThere will be tasks until the Golden Sol sinks and lets just say that the Golden Sol doesn’t sink."
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
      description: "Get exclusive access to the Challenge Island.\nOn the Challenge Island, Crewmen can challenge each other by betting their NFT’s."
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
