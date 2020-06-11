import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "application";
import { isAndroid } from "ui/page";

@Component({
  selector: "ns-wishlist",
  templateUrl: "./wishlist.component.html",
  moduleId: module.id
})
export class WishlistComponent implements OnInit {

  constructor() {
    console.log("WishlistComponent initialised");
  }

  ngOnInit() {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
}

}
