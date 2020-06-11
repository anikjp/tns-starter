import { HttpClient } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CoreModule } from "@app/core/core.module";
import { SharedModule } from "@app/shared/shared.module";
import { createTranslationLoader } from "@app/utils";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { localize } from "nativescript-localize/angular";
import { NativeScriptMaterialCardViewModule } from "nativescript-material-cardview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";

import "@app/utils/console-color";

import * as application from "tns-core-modules/application";
import { AppConfigModule } from "~/config/app-config.module";
application.setResources({ L: localize });

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        AppRoutingModule,
        NativeScriptModule,
        AppConfigModule,
        NativeScriptMaterialCardViewModule,
        NativeScriptUISideDrawerModule,
        TranslateModule.forRoot({
            defaultLanguage: "en",
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslationLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
