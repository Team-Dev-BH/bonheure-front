import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { DataStorageCommandeService } from "../../../service/data-storage-commande.service";

@Component({
  selector: "app-recap",
  templateUrl: "./recap.component.html",
  styleUrls: ["./recap.component.css"]
})
export class RecapComponent implements OnInit {
  categorie = "plomberie";
  sous_categorie = "urgence";
  type = "fuite d'eau";
  sous_type = "WC";

  // variables to stores route params subscribed from the data storage service:
  categorieName: String;
  prestationName: String;
  sousPrestationName: String;
  arrayOfRouteParamps: String[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageCommandeService
  ) {}

  ngOnInit() {
    this.dataStorageService
      .getRouteParams()
      .pipe()
      .subscribe(routeParams => {
        this.arrayOfRouteParamps = routeParams.slice();
      });

    console.log(this.arrayOfRouteParamps);

    this.categorieName = this.arrayOfRouteParamps[0];
    this.prestationName = this.arrayOfRouteParamps[1];
    this.sousPrestationName = this.arrayOfRouteParamps[2];
  }

  confirm() {
    this.router.navigate([
      "home/services",
      this.categorieName,
      this.prestationName,
      this.sousPrestationName,
      "recap",
      "confirm"
    ]);
  }
}
