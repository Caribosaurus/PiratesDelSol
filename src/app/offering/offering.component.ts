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
      description: [
        "Get access to a monthly treasure chest which is filled with 38% of the royalties.",
        "Every Crewman has access to an equal part of the treasure chest riches."
      ]
    },
    {
      title: "Token Reward System",
      icon: "/assets/icons/Token.png",
      description: [
        "Crewmen (NFT owners) and Sailors (Non-Owners) can both do daily tasks to receive Pirates del Sol golden tokens.",
        "These Tokens represent ALOT for the project's economy.",
        "You'll be able to : Trade, Buy, Sell, Gamble and Burn them.They're our currency, make sure to take profit out of it."
      ]
    },
    {
      title: "Reduce supply / Increase scarcity mechanism",
      icon: "/assets/icons/Chart.png",
      description: [
        "You'll be able to BURN your Male and Female pirates to give birth to a newborn baby pirate NFT (Gen 2).",
        "They will inherit the rarity traits you choose from the slaughtered parents."
      ]
    },
    {
      title: "Handmade Artwork with rarity traits",
      icon: "/assets/icons/Ranks.png",
      description: [
        "100% of our Artwork is hand-drawn with rarity traits and rankings.",
        "Secondary sales will happen on a chosen Marketplace (TBD)"
      ]
    },
    {
      title: "Gamble your NFT's mini games",
      icon: "/assets/icons/Dice.png",
      description: [
        "Get exclusive access to the Challenge Island were Crewmen can challenge each other by betting their NFT’s on a 50/50 chance."
      ]
    },
    {
      title: "Community charitable donation",
      icon: "/assets/icons/Charity.png",
      description: [
        "We will make a community-chosen charitable donation which will be voted during October 2022."
      ]
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
