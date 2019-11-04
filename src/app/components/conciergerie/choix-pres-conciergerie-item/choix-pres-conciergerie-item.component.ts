import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-choix-pres-conciergerie-item",
  templateUrl: "./choix-pres-conciergerie-item.component.html",
  styleUrls: ["./choix-pres-conciergerie-item.component.css"]
})
export class ChoixPresConciergerieItemComponent implements OnInit {
  @Input() choix;
  constructor() {}

  ngOnInit() {}
}
