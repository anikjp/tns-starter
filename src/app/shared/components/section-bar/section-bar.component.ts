import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "amway-section-bar",
    templateUrl: "./section-bar.component.html",
    styleUrls: ["./section-bar.component.scss"]
})
export class SectionBarComponent {

    @Input() sectionName = "";
    @Input() navigationButtonText = "";
    @Input() navigationButtonLink = "";

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {
    }

    navigate(): void {
        console.log("navigate");
        this.router.navigate(["/home"]);
        // this.routerExtensions.navigate(['/home']);
    }

}
