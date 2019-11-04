import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choix-pres-conciergerie",
  templateUrl: "./choix-pres-conciergerie.component.html",
  styleUrls: ["./choix-pres-conciergerie.component.css"]
})
export class ChoixPresConciergerieComponent implements OnInit {
  choixList = [];
  constructor() {}

  ngOnInit() {
    this.choixList = [
      {
        image: "pppp.jpg",
        name: "Mohamed",
        avis: "18 ",
        disponibilite: "Disponible dans 1h30",
        prix: "23 - 25 dt"
      },

      {
        image: "fuite.jpg",
        name: "Salah",
        avis: "36",
        disponibilite: "Disponible dans 1h",
        prix: "26 - 30 dt"
      },

      {
        image: "pppp.jpg",
        name: "Yassin",
        avis: "22",
        disponibilite: "Disponible dans 2h30",
        prix: "20 - 25 dt"
      }
    ];
  }
}
