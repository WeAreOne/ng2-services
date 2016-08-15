import { Component, OnInit, Inject } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { CustomService, SizeService } from "../services";

@Component({
  moduleId: module.id,
  selector: 'app-sub',
  templateUrl: 'sub.component.html',
  styleUrls: ['sub.component.css'],
  providers: [ { provide: 'SizeService', useClass: CustomService } ],
  viewProviders: [ Title ]
})
export class SubComponent implements OnInit {

  constructor(@Inject('SizeService') private sizeService: SizeService, title: Title) {
    title.setTitle('Sub component title');
  }

  ngOnInit() {
    this.sizeService.run();
  }

}
