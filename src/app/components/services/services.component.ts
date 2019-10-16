import { Component, OnInit, OnDestroy } from "@angular/core";

import { ServiceService } from "../../service/service.service";

import { Subscription } from "rxjs";

@Component({
  selector: "app-service",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})

// this service comminicates with categorie , prestation , commande in the database
export class ServicesComponent implements OnInit, OnDestroy {
  listService = [];

  listSubcription: Subscription;

  constructor(private serviceSrv: ServiceService) {}

  ngOnInit() {
    this.listSubcription = this.serviceSrv.listSubject.subscribe(services => {
      this.listService = services;
    });

    this.serviceSrv.emitListSubject();
  }

  ngOnDestroy() {
    //unsucribing to service subject when coponents is detroyed
    this.listSubcription.unsubscribe();
  }
}
