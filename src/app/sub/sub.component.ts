import { Component, OnInit, Inject } from '@angular/core';
import { CustomService, SizeService } from "../services";

@Component({
  moduleId: module.id,
  selector: 'app-sub',
  templateUrl: 'sub.component.html',
  styleUrls: ['sub.component.css'],
  providers: [ { provide: 'SizeService', useClass: CustomService } ]
})
export class SubComponent implements OnInit {

  constructor(@Inject('SizeService') private sizeService: SizeService) { }

  ngOnInit() {
    this.sizeService.run();
  }

}
