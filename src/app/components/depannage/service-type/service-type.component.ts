import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-type",
  templateUrl: "./service-type.component.html",
  styleUrls: ["./service-type.component.css"]
})
export class ServiceTypeComponent implements OnInit {
  listType = [];

  constructor() {}

  ngOnInit() {
    this.listType = [
      { Sous_categorie: "Plomberie" },
      { Sous_categorie: "Electricite" },
      { Sous_categorie: "Chaud-froid" },
      { Sous_categorie: "Peinture" },
      { Sous_categorie: "Vitrerie" },
      { Sous_categorie: "A la Demande" }
    ];
  }
}
