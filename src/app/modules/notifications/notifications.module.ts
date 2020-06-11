import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NotificationsRoutingModule } from "@app/modules/notifications/notifications-routing.module";
import { NotificationsComponent } from "@app/modules/notifications/notifications.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptLocalizeModule } from "nativescript-localize/localize.module";

@NgModule({
    imports: [
        NativeScriptLocalizeModule,
        NativeScriptCommonModule,
        NotificationsRoutingModule
    ],
    declarations: [
        NotificationsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NotificationsModule { }
