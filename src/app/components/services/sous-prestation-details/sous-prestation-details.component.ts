import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ServiceService } from "../../../service/service.service";
import { Prestation } from "src/app/entities/prestation.model";
import { DataStorageCommandeService } from "../../../service/data-storage-commande.service";

@Component({
  selector: "app-sous-prestation-details",
  templateUrl: "./sous-prestation-details.component.html",
  styleUrls: ["./sous-prestation-details.component.css"]
})
export class SousPrestationDetailsComponent implements OnInit {
  sousPrestationName: string;
  prestationName: String;
  categorieName: String;
  sousPrestation: Prestation;

  routeParam: String;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceSrv: ServiceService,
    private dataStorageService: DataStorageCommandeService
  ) {}

  ngOnInit() {
    //subscribe to route param
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.sousPrestationName = params.get("nameSousPrestation");
    });
    console.log("sous presta name:", this.sousPrestationName);

    // subscribe to getPrestationByName observable:
    this.serviceSrv
      .getPrestationByName(this.sousPrestationName)
      .subscribe(data => {
        this.sousPrestation = data;
        console.log("current sous nprestation:", this.sousPrestation);
      });

    //subscribing to route params
    this.dataStorageService.getRouteParams().subscribe(routeParams => {
      this.prestationName = routeParams[1];
      this.categorieName = routeParams[0];
      console.log("routeParams", routeParams);
      console.log("captured prestation name : ", this.prestationName);
    });

    // this.dataStorageService.getRouteParams().subscribe(routeParams => {
    //   this.categorieName = routeParams[0];
    // });

    console.log("categoriffffffe", this.categorieName);
  }

  goToRecap() {
    this.router.navigate([
      "home/services",
      this.categorieName,
      this.prestationName,
      this.sousPrestationName,
      "recap"
    ]);

    // send  routePrams array to indeterested components:
    this.dataStorageService
      .getRouteParams()
      .pipe()
      .subscribe(routeParams => {
        routeParams.push(this.sousPrestationName);
      });
  }
}
