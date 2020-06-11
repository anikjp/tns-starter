import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalComponent } from '@app/modules/auth/modal.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    ModalComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AuthModule { }
