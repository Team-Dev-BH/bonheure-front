import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../../service/service.service";

//service for sharing data between comande interfaces
import { DataStorageCommandeService } from "../../../service/data-storage-commande.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { Prestation } from "src/app/entities/prestation.model";

@Component({
  selector: "app-categorie-service-details",
  templateUrl: "./categorie-service-details.component.html",
  styleUrls: ["./categorie-service-details.component.css"]
})
export class CategorieServiceDetailsComponent implements OnInit {
  categorieName: String;

  categorieSubscription: Subscription;
  prestationsList: Prestation[];

  constructor(
    private serviceSrv: ServiceService,
    private dataStorageService: DataStorageCommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categorieName = params.get("nameCategorie");
    });

    this.serviceSrv
      .getPrestationByCategoryName(this.categorieName)
      .subscribe(data => {
        this.prestationsList = data;
        console.log("current prestation list", this.prestationsList);
      });
  }

  //selection a prestation
  selectPrestation(prestation) {
    this.router.navigate([
      "/home/services",
      this.categorieName,
      prestation.name
    ]);
    // send route param categorieName to next component
    this.dataStorageService
      .getRouteParams()
      .pipe()
      .subscribe(routeParams => {
        routeParams.push(this.categorieName);
      });
  }
}
