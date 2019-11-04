import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

  ngOnInit() {}
  confirm() {
    this.router.navigate(["home/confirmation"]);
  }
}
