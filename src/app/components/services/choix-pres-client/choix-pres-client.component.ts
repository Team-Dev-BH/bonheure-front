import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choix-pres-client",
  templateUrl: "./choix-pres-client.component.html",
  styleUrls: ["./choix-pres-client.component.css"]
})
export class ChoixPresClientComponent implements OnInit {
  choixList = [];
  tarif = [];
  constructor() {}

  ngOnInit() {
    this.choixList = [
      {
        image: "pppp.jpg",
        name: "Mokhtar",
        avis: "18 ",
        disponibilite: "Disponible dans 1h30",
        prix: "65 - 135 dt"
      },

      {
        image: "fuite.jpg",
        name: "Rabia",
        avis: "36",
        disponibilite: "Disponible dans 1h",
        prix: "23 dt"
      }
    ];

    this.tarif = [{ name: "Main d'oeuvre" }, { name: "Déplacement" }];
  }
}
