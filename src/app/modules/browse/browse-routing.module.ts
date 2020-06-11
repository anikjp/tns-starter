import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { BrowseComponent } from "@app/modules/browse/browse.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", component: BrowseComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BrowseRoutingModule { }
