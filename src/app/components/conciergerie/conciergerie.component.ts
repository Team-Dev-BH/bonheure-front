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
  currentIndex = 0;
  listSubcription: Subscription;

  constructor(private serviceSrv: ServiceService) {}

  ngOnInit() {
    this.listSubcription = this.serviceSrv.listSubject.subscribe(services => {
      this.listServices = services;
    });

    // emitting list of services
    this.serviceSrv.emitListSubject();
    console.log(this.listServices);
  }

  previous() {
    if (this.currentIndex > 0) this.currentIndex = this.currentIndex - 1;

    this.serviceSrv.emitListSubject();
  }

  next() {
    if (this.currentIndex < this.listServices.length - 1)
      this.currentIndex = this.currentIndex + 1;

    this.serviceSrv.emitListSubject();
  }

  ngOnDestroy() {
    this.listSubcription.unsubscribe();
  }
}
