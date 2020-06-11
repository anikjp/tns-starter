import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
@Component({
  selector: "ns-account",
  templateUrl: "./account.component.html",
  moduleId: module.id
})
export class AccountComponent implements OnInit {

  constructor() {
    console.log("AccountComponent initialised");

  }

  ngOnInit() {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
