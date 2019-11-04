import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sous-pres-conciergerie",
  templateUrl: "./sous-pres-conciergerie.component.html",
  styleUrls: ["./sous-pres-conciergerie.component.css"]
})
export class SousPresConciergerieComponent implements OnInit {
  optionsList = [];

  constructor() {}

  ngOnInit() {
    this.optionsList = [
      { name: "WC", image: "wc.jpg" },
      { name: "Robinetterie", image: "fuite.jpg" },

      { name: "Fuite d'eau ou engorgement", image: "fuit1.jpg" },
      { name: "Chauffe-eau", image: "chauffe.jpg" },

      { name: "Instalaltion ou changement d'equipement(s)", image: "pppp.jpg" },
      { name: "Autres", image: "autres.png" }
    ];
  }
}
