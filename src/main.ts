<<<<<<< HEAD
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
=======
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
>>>>>>> 9a504ce99d860be377e32a35eee80038f841b1a6

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

//hammer js for carousel touch
import "hammerjs";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
