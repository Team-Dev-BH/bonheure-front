import { Component, OnInit, OnDestroy } from "@angular/core";

import { ServiceService } from "../../service/service.service";

import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Categorie } from "src/app/entities/categorie.model";

@Component({
  selector: "app-service",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})

// this service comminicates with categorie , prestation , commande in the database
export class ServicesComponent implements OnInit, OnDestroy {
  categoriesList: Categorie[];

  listSubcription: Subscription;

  constructor(private serviceSrv: ServiceService, private router: Router) {}

  ngOnInit() {
    this.serviceSrv.getAllCatgories().subscribe(data => {
      this.categoriesList = data;
      console.log(this.categoriesList);
    });
  }

  // navigate a certain categorie
  selectService(categorie) {
    this.router.navigate(["/home/services", categorie.name]);
    //this.serviceSrv.emitListSubject();
  }

  ngOnDestroy() {
    //unsucribing to service subject when coponents is detroyed
    // this.listSubcription.unsubscribe();
  }
}
