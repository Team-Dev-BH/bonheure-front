import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choix-pres-attente",
  templateUrl: "./choix-pres-attente.component.html",
  styleUrls: ["./choix-pres-attente.component.css"]
})
export class ChoixPresAttenteComponent implements OnInit {
  image = "pppp.jpg";
  name = "Mohamed";
  avis = "18 ";
  disponibilite = "Disponible dans 1h30";
  prix = "23 - 25 dt";
  constructor() {}

  ngOnInit() {}
}
