import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthComponent } from '@app/modules/auth/auth.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'default', component: AuthComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
