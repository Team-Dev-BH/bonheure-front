import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-commande-delai",
  templateUrl: "./commande-delai.component.html",
  styleUrls: ["./commande-delai.component.css"]
})
export class CommandeDelaiComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  delai() {
    this.router.navigate(["home/recap"]);
  }
}
