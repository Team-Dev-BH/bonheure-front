import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../../service/service.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-categorie-service-details",
  templateUrl: "./categorie-service-details.component.html",
  styleUrls: ["./categorie-service-details.component.css"]
})
export class CategorieServiceDetailsComponent implements OnInit {
  serviceReference;
  serviceServices = [];

  constructor(
    private serviceSrv: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // snapshot apporch , limited :
    // let reference = this.route.snapshot.paramMap.get("reference");

    //paramMap absovale :
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.serviceReference = params.get("reference");
      console.log(this.serviceReference);
    });
  }
}
