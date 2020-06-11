import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { SERVICES } from './services';
import { AppErrorHandlers } from './helpers';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandlers },
        ...SERVICES,
    ]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. Import CoreModule into the AppModule only.');
        }
    }
}
