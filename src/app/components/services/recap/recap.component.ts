import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recap",
  templateUrl: "./recap.component.html",
  styleUrls: ["./recap.component.css"]
})
export class RecapComponent implements OnInit {
  categorie = "plomberie";
  sous_categorie = "urgence";
  type = "fuit d'eau";
  sous_type = "WC";

  constructor() {}

  ngOnInit() {}
}
