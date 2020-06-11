import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "@app/modules/home/home.module#HomeModule" },
    { path: "auth", loadChildren: "@app/modules/auth/auth.module#AuthModule" },
    { path: "browse", loadChildren: "@app/modules/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "@app/modules/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "@app/modules/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "@app/modules/notifications/notifications.module#NotificationsModule" },
    { path: "cart", loadChildren: "@app/modules/cart/cart.module#CartModule" },
    { path: "wishlist", loadChildren: "@app/modules/wishlist/wishlist.module#WishlistModule" },
    { path: "account", loadChildren: "@app/modules/account/account.module#AccountModule" },
    {
        path: "modal-view",
        loadChildren: "@app/modules/auth/auth.module#AuthModule",
        data: { title: "Modal view" }
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
