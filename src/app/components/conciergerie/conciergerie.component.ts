import { Component, OnInit, OnDestroy } from "@angular/core";
import { ServiceService } from "../../service/service.service";

import { Subscription } from "rxjs";

@Component({
  selector: "app-conciergerie",
  templateUrl: "./conciergerie.component.html",
  styleUrls: ["./conciergerie.component.css"]
})
export class ConciergerieComponent implements OnInit, OnDestroy {
  listServices = [];
  listSubcription: Subscription;

  constructor(private serviceSrv: ServiceService) {}

  ngOnInit() {
    this.listSubcription = this.serviceSrv.listSubject.subscribe(services => {
      this.listServices = services;
    });

    this.serviceSrv.emitListSubject();
    console.log(this.listServices);
  }

  ngOnDestroy() {
    this.listSubcription.unsubscribe();
  }
}
