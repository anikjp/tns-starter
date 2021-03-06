// >> main-modal-view-code
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./home-modal-view.component.html"
})
export class HomeModalViewComponent implements OnInit {
    constructor(
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
        console.log("-----------------HomeModalViewComponent-----------------");
        this._routerExtensions.navigate(["modal"], { relativeTo: this._activeRoute });
        console.log("----------------------------------");

    }
}
// << main-modal-view-code
