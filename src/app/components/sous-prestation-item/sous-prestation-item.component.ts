import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sous-prestation-item",
  templateUrl: "./sous-prestation-item.component.html",
  styleUrls: ["./sous-prestation-item.component.css"]
})
export class SousPrestationItemComponent implements OnInit {
  @Input() prestation;
  @Output() selectSousPrestation = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(sousPrestation) {
    this.selectSousPrestation.emit(sousPrestation);
    console.log(" from child emitted: ", sousPrestation);
  }
}
