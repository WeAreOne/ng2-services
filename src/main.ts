import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { ViewportService } from "./app/services";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ViewportService,
  { provide: 'SizeService',
    useFactory: (viewport: any) => viewport.determineService(),
    deps: [ ViewportService ]
  }
]);
