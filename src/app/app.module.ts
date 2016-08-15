import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { ViewportService } from "./services/ViewportService";
import { SubComponent } from "./sub";

@NgModule({
  declarations: [ AppComponent, SubComponent ],
  imports:      [ BrowserModule ],
  bootstrap:    [ AppComponent ],
  providers: [ ViewportService,
    { provide: 'SizeService',
      useFactory: (viewport: any) => viewport.determineService(),
      deps: [ ViewportService ]
    }
  ]
})
export class AppModule {}
