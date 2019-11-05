import { Component, OnInit, OnDestroy } from "@angular/core";
import { ServiceService } from "../../service/service.service";

import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Categorie } from "../../entities/categorie.model";

@Component({
  selector: "app-conciergerie",
  templateUrl: "./conciergerie.component.html",
  styleUrls: ["./conciergerie.component.css"]
})
export class ConciergerieComponent implements OnInit, OnDestroy {
  categoriesList: Categorie[];
  listSubcription: Subscription;

  constructor(private serviceSrv: ServiceService, private router: Router) {}

  ngOnInit() {
    this.serviceSrv.getAllCatgories().subscribe(dataList => {
      this.categoriesList = dataList;
      console.log(this.categoriesList);
    });
  }

  ngOnDestroy() {
    //this.listSubcription.unsubscribe();
  }
}
