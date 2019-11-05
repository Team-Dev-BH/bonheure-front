import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../../service/service.service";

//service for sharing data between comande interfaces
import { DataStorageCommandeService } from "../../../service/data-storage-commande.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-categorie-service-details",
  templateUrl: "./categorie-service-details.component.html",
  styleUrls: ["./categorie-service-details.component.css"]
})
export class CategorieServiceDetailsComponent implements OnInit {
  serviceReference;

  categorieSubscription: Subscription;
  categorie = {};

  constructor(
    private serviceSrv: ServiceService,
    private dataStorageService: DataStorageCommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.serviceReference = params.get("referenceCategorie");
    });

    // this.categorie = this.serviceSrv.getSingleServiceByReference(
    //   parseInt(this.serviceReference)
    // );

    console.log(this.categorie);

    //send route param to next component:
  }

  //selection a prestation
  selectPrestation(prestation) {
    // sending route param to next component using data storage service
    this.dataStorageService.changeRouteParam(this.serviceReference);

    this.router.navigate(
      ["/home/services/", this.serviceReference, prestation.reference],
      {
        state: { serviceReference: this.serviceReference }
      }
    );
  }
}
