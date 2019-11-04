import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-recap-conciergerie",
  templateUrl: "./recap-conciergerie.component.html",
  styleUrls: ["./recap-conciergerie.component.css"]
})
export class RecapConciergerieComponent implements OnInit {
  listCategorieDetails = [];
  listPrestaionDetails = [];
  commande = [];
  adress = [];

  constructor(private router: Router) {}

  ngOnInit() {
    (this.listCategorieDetails = [{ nameCategorie: "WC", image: "bn.PNG" }]),
      (this.listPrestaionDetails = [{ namePres: "fuite d'eau " }]),
      (this.commande = [{ delai: "aujourd'hui " }]),
      (this.adress = [{ name: "26 rue de l'Amirale Roussin, 75015" }]);
  }

  confirm() {
    this.router.navigate(["/home/confirmation_conciergerie"]);
  }
}
