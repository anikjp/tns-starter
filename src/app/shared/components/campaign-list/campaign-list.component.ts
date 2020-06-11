import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "amway-campaign-list",
    templateUrl: "./campaign-list.component.html",
    styleUrls: ["./campaign-list.component.scss"]
})
export class CampaignListComponent {

    campaignList: Array<any> = [
        {title: "プロテイン発売記念！ n by NUTRILITE ..", subtitle: "n by NUTRILITE ..", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590071257/main-image1_hgidgb.png"}, {title: "潤いプラスキャンペーン", subtitle: "G&Hスタイリッシュ ハ..", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590071269/bnr_ato_2x_vb2lqq.png"},
        {title: "美白対策キャンペーン！", subtitle: "M or Nothing..", url: "https://unsplash.it/400/300/?image=870"},
        {title: "美白対策キャンペーン！", subtitle: "M or Nothing..", url: "https://unsplash.it/400/300/?image=876"}
    ];
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
