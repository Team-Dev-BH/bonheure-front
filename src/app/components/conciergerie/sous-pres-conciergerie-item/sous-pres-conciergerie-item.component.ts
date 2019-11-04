import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sous-pres-conciergerie-item",
  templateUrl: "./sous-pres-conciergerie-item.component.html",
  styleUrls: ["./sous-pres-conciergerie-item.component.css"]
})
export class SousPresConciergerieItemComponent implements OnInit {
  @Input() option;

  constructor(private router: Router) {}

  ngOnInit() {}
  sousPresConciergerie() {
    this.router.navigate(["home/commentaire_conciergerie"]);
  }
}
