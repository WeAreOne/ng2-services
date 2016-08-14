import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { ViewportService } from "./services/ViewportService";
import { SubComponent } from "./sub";
import { CustomService } from "./services/CustomService";
import { Title } from "@angular/platform-browser";

@NgModule({
  declarations: [ AppComponent, SubComponent ],
  imports:      [ BrowserModule ],
  bootstrap:    [ AppComponent ],
  providers: [ ViewportService,
    { provide: 'SizeService',
      useFactory: (viewport: any) => viewport.determineService(),
      deps: [ ViewportService ]
    },
    { provide: 'SizeService', useClass: CustomService },
    Title
  ]
})
export class AppModule {}
