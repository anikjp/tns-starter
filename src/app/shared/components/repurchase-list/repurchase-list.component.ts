import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "amway-repurchase-list",
    templateUrl: "./repurchase-list.component.html",
    styleUrls: ["./repurchase-list.component.scss"]
})
export class RepurchaseListComponent {

    rePurchaseList: Array<any> = [
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076188/%E7%94%BB%E5%83%8F_2_2x_frk9oo.png"},
        {title: "ユースエクセンド ", title1: "リフト ユー", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076227/category_lineup_img04_2x_wg4zdb.png"},
        {title: "XS エナジードリンク", title1: " エ クストラ", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076264/%E7%94%BB%E5%83%8F_3_2x_fdqir9.png"},
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076188/%E7%94%BB%E5%83%8F_2_2x_frk9oo.png"},
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076227/category_lineup_img04_2x_wg4zdb.png"},
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076264/%E7%94%BB%E5%83%8F_3_2x_fdqir9.png"}
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
