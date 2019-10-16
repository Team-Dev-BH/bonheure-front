import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pratique-item",
  templateUrl: "./pratique-item.component.html",
  styleUrls: ["./pratique-item.component.css"]
})
export class PratiqueItemComponent implements OnInit {
  @Input() pratique;

  constructor() {}

  ngOnInit() {}
}
