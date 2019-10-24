import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-accueil-item",
  templateUrl: "./accueil-item.component.html",
  styleUrls: ["./accueil-item.component.css"]
})
export class AccueilItemComponent implements OnInit {
  @Input() accueil;

  constructor() {}

  ngOnInit() {}
}
