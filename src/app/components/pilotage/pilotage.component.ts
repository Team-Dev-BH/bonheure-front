import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pilotage",
  templateUrl: "./pilotage.component.html",
  styleUrls: ["./pilotage.component.css"]
})
export class PilotageComponent implements OnInit {
  listPilotage = [];

  constructor() {}

  ngOnInit() {
    this.listPilotage = [
      { typePilotage: "Planificateur" },
      { typePilotage: "Reporting" },
      { typePilotage: "Gestion de l'abonnement" },
      { typePilotage: "Factures" }
    ];
  }
}
