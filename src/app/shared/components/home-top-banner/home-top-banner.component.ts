import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Carousel, CarouselItem } from "nativescript-carousel";
registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);
registerElement("StarRating", () => require("nativescript-star-ratings").StarRating);

@Component({
  moduleId: module.id,
  selector: "app-home-top-banner",
  templateUrl: "./home-top-banner.component.html",
  styleUrls: ["./home-top-banner.component.scss"]
})
export class HomeTopBannerComponent implements OnInit {

    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    constructor() {
        //
    }

    ngOnInit(): void {

    }

}
