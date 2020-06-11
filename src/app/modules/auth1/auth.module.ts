import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AuthComponent } from "@app/modules/auth1/auth.component";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
      AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule1 { }
