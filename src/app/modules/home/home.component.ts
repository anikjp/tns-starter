import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Carousel, CarouselItem } from "nativescript-carousel";
import Theme from "@nativescript/theme";
import { View } from "tns-core-modules/ui/core/view";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
import { Animation } from "tns-core-modules/ui/animation";
registerElement("Carousel", () => Carousel);
registerElement("CarouselItem", () => CarouselItem);
registerElement("StarRating", () => require("nativescript-star-ratings").StarRating);
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    // providers: [DataService],
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    themeMode = true;
    selectedIndex = 0;
    segmentedBarItems: Array<SegmentedBarItem>;
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    mainImages: Array<any> = [
        {title: "プロテイン発売記念！ n by NUTRILITE ..", title1: "n by NUTRILITE ..", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590071257/main-image1_hgidgb.png"},
        {title: "潤いプラスキャンペーン", title1: "G&Hスタイリッシュ ハ..", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590071269/bnr_ato_2x_vb2lqq.png"},
        {title: "美白対策キャンペーン！", title1: "M or Nothing..", url: "https://unsplash.it/400/300/?image=870"},
        {title: "美白対策キャンペーン！", title1: "M or Nothing..", url: "https://unsplash.it/400/300/?image=876"}
    ];

    productImages: Array<any> = [
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076188/%E7%94%BB%E5%83%8F_2_2x_frk9oo.png"},
        {title: "ユースエクセンド ", title1: "リフト ユー", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076227/category_lineup_img04_2x_wg4zdb.png"},
        {title: "XS エナジードリンク", title1: " エ クストラ", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076264/%E7%94%BB%E5%83%8F_3_2x_fdqir9.png"},
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076188/%E7%94%BB%E5%83%8F_2_2x_frk9oo.png"},
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076227/category_lineup_img04_2x_wg4zdb.png"},
        {title: "ニュートリライト トリ ", title1: "プルX 3セル", url: "https://res.cloudinary.com/dpczgy6fb/image/upload/v1590076264/%E7%94%BB%E5%83%8F_3_2x_fdqir9.png"}
    ];

    categoryList: Array<any> = [
        {title: "サプリメント", url: "https://unsplash.it/400/300/?image=867"},
        {title: "ビューティ&ボディ", file: "res://mountain"},
        {title: "ホーム&キッチン", file: "~/assets/sea-sunrise.jpg"}
    ];

    wrapperLayout: View = undefined;
    scrollView: ScrollView = undefined;
    bar: View = undefined;
    minStretch = 0;
    maxStretch = 40;
    animDuration = 250;
    animation: Animation = undefined;
    prevTranslateY = 0;
    prevScale = 0;

    constructor() {
        //
        this.segmentedBarItems = [];
        for (let i = 1; i < 4; i++) {
            const segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.segmentedBarItems.push(segmentedBarItem);
        }

    }

    ngOnInit(): void {

    }

    navigateToLogin() {
        console.log("navigateToLogin");
    }

    changeTheme() {
        this.themeMode = !this.themeMode;
        Theme.toggleMode(this.themeMode);
        console.log("navigateToLogin");
    }

    onButtonTap(event): void {

    }

    refreshList(args) {
        const pullRefresh = args.object;
        setTimeout(() => {
            pullRefresh.refreshing = false;
        }, 1000);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
