import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ServiceService } from "../../../service/service.service";
import { DataStorageCommandeService } from "../../../service/data-storage-commande.service";
import { Prestation } from "src/app/entities/prestation.model";

@Component({
  selector: "app-prestation-details",
  templateUrl: "./prestation-details.component.html",
  styleUrls: ["./prestation-details.component.css"]
})
export class PrestationDetailsComponent implements OnInit {
  categorieReference;
  prestationName: String;
  prestationListChilds: Prestation[];

  constructor(
    private serviceSrv: ServiceService,
    private dataStorageService: DataStorageCommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categorieReference = history.state.serviceReference;
  }

  ngOnInit() {
    //Subscribing to route param prestation name
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.prestationName = params.get("namePrestation");
    });

    console.log(this.prestationName);

    //subcribing to observable list of prestations childs:
    this.serviceSrv
      .getPrestationByPrentName(this.prestationName)
      .subscribe(data => {
        this.prestationListChilds = data;
        console.log("list of prestation childs:", this.prestationListChilds);
      });
    // this.route.paramMap.subscribe((params: ParamMap) => {
    // this.prestationReference = params.get("referencePrestation");
    // console.log("current presatation reference ", this.prestationReference);
    // });

    // this.serviceSrv.getPrestationByCategoryName().subscribe(data => {
    //   console.log(data);
    //   this.PrestationListByCategoryName = data;
    // })

    // this.prestation = this.serviceSrv.getPrestationByReference(
    //   parseInt(this.categorieReference),
    //   parseInt(this.prestationReference)
    // );

    // getting categorie reference from service as observable
    this.dataStorageService.routeParam.subscribe(routeParam => {
      this.categorieReference = routeParam;
    });
    console.log("captured route param", this.categorieReference);
  }
}
