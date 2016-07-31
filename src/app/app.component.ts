import { Component, Inject } from '@angular/core';
import { SizeService } from "./services/SizeService";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Injection de dépendances';

  constructor(@Inject('SizeService') private sizeService: SizeService) { }

  invokeServices(): void { this.sizeService.run(); }
}
