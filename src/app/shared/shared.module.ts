import { NgModule } from "@angular/core";
import { BrowsingHistoryComponent } from "@app/shared/components/browsing-history/browsing-history.component";
import { CampaignListComponent } from "@app/shared/components/campaign-list/campaign-list.component";
import { NotificationBarComponent } from "@app/shared/components/notification-bar/notification-bar.component";
import { RecommendationListComponent } from "@app/shared/components/recommendation-list/recommendation-list.component";
import { RepurchaseListComponent } from "@app/shared/components/repurchase-list/repurchase-list.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptLocalizeModule } from "nativescript-localize/localize.module";
import { AppBarComponent } from "./components/app-bar/app-bar.component";
import { HomeTopBannerComponent } from "./components/home-top-banner/home-top-banner.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { SectionBarComponent } from "./components/section-bar/section-bar.component";

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptCommonModule,
        NativeScriptLocalizeModule
    ],
    exports: [
        AppBarComponent,
        SearchBarComponent,
        HomeTopBannerComponent,
        HomeTopBannerComponent,
        CampaignListComponent,
        BrowsingHistoryComponent,
        RecommendationListComponent,
        NotificationBarComponent,
        RepurchaseListComponent,
        SectionBarComponent
    ],
    declarations: [
        AppBarComponent,
        SearchBarComponent,
        HomeTopBannerComponent,
        NotificationBarComponent,
        CampaignListComponent,
        BrowsingHistoryComponent,
        RecommendationListComponent,
        RepurchaseListComponent,
        SectionBarComponent
    ],
    providers: []
})
export class SharedModule { }
