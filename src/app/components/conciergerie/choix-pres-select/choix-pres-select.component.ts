import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choix-pres-select",
  templateUrl: "./choix-pres-select.component.html",
  styleUrls: ["./choix-pres-select.component.css"]
})
export class ChoixPresSelectComponent implements OnInit {
  image = "pppp.jpg";
  name = "Mohamed";
  avis = "18 ";
  disponibilite = "Disponible dans 1h30";
  prix = "23 - 25 dt";

  constructor() {}

  ngOnInit() {}
}
