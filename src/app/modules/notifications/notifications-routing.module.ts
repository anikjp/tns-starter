import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NotificationsComponent } from "@app/modules/notifications/notifications.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", component: NotificationsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NotificationsRoutingModule { }
