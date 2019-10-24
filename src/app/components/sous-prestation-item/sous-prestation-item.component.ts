import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sous-prestation-item",
  templateUrl: "./sous-prestation-item.component.html",
  styleUrls: ["./sous-prestation-item.component.css"]
})
export class SousPrestationItemComponent implements OnInit {
  @Input() sousPresta;

  constructor() {}

  ngOnInit() {}
}
