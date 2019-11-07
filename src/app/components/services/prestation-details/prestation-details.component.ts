import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ServiceService } from "../../../service/service.service";
import { DataStorageCommandeService } from "../../../service/data-storage-commande.service";
import { Prestation } from "src/app/entities/prestation.model";

@Component({
  selector: "app-prestation-details",
  templateUrl: "./prestation-details.component.html",
  styleUrls: ["./prestation-details.component.css"]
})
export class PrestationDetailsComponent implements OnInit, OnDestroy {
  categorieName: String;
  prestationName: String;
  prestationListChilds: Prestation[];

  constructor(
    private serviceSrv: ServiceService,
    private dataStorageService: DataStorageCommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.categorieName = history.state.serviceReference;
  }

  ngOnInit() {
    //Subscribing to route param prestation name
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.prestationName = params.get("namePrestation");
    });

    //subscribing to categorieName from data storage service:
    this.dataStorageService.getRouteParams().subscribe(routeParams => {
      this.categorieName = routeParams[0];
      console.log("routeParams", routeParams);
      console.log("routeParam subject", this.categorieName);
    });

    console.log(this.prestationName);
    console.log("captured categorie name route param ", this.categorieName);

    //subcribing to observable list of prestations childs:
    this.serviceSrv
      .getPrestationByPrentName(this.prestationName)
      .subscribe(data => {
        this.prestationListChilds = data;
        console.log("list of prestation childs:", this.prestationListChilds);
      });
  }

  //navigate to a sous prestation :
  selectSousPrestation(sousPrestation) {
    // send Prestation name to interested component:

    this.router.navigate([
      "/home/services",
      this.categorieName,
      this.prestationName,
      sousPrestation.name
    ]);
    this.dataStorageService
      .getRouteParams()
      .pipe()
      .subscribe(routeParams => {
        routeParams.push(this.prestationName);
      });
    console.log("captured emmited prestation", sousPrestation);
  }

  ngOnDestroy() {}
}
