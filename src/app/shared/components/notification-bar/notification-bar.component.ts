import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "amway-notification-bar",
    templateUrl: "./notification-bar.component.html",
    styleUrls: ["./notification-bar.component.scss"]
})
export class NotificationBarComponent implements OnInit {

    constructor() {
        console.log("AppBarComponent");
    }

    ngOnInit(): void {
        //
    }

    onButtonTap(event): void {
        console.log("Button was pressed");
    }

}
