import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ItemDetailComponent } from '@app/modules/cart/item-detail/item-detail.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CartRoutingModule
    ],
    declarations: [
        CartComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CartModule { }
