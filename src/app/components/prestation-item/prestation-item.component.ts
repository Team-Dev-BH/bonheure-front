import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-prestation-item",
  templateUrl: "./prestation-item.component.html",
  styleUrls: ["./prestation-item.component.css"]
})
export class PrestationItemComponent implements OnInit {
  @Input() prestation;
  @Output() selectPrestation = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(prestation) {
    this.selectPrestation.emit(prestation);
    console.log("emmited", prestation);
  }
}
