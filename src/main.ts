// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { AppModule } from "@app/app.module";
import { setAppEvents } from "@app/globals/app-events";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

setAppEvents();
platformNativeScriptDynamic().bootstrapModule(AppModule);
