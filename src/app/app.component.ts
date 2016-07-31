import { Component, Inject, ReflectiveInjector } from '@angular/core';
import { SizeService } from "./services/SizeService";
import { ViewportService } from "./services/ViewportService";
import { SubComponent } from "./sub";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ SubComponent ]
})
export class AppComponent {
  title = 'Injection de dépendances';

  constructor(@Inject('SizeService') private sizeService: SizeService) { }

  invokeServices(): void { this.sizeService.run(); }

  useInjectors(): void {
    let injector:any = ReflectiveInjector.resolveAndCreate([
      ViewportService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => viewport.determineService(),
        deps: [ ViewportService ]
      }
    ]);

    let sizeService: SizeService = injector.get('OtherSizeService');
    sizeService.run();
  }
}
