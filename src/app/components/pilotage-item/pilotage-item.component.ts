import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pilotage-item",
  templateUrl: "./pilotage-item.component.html",
  styleUrls: ["./pilotage-item.component.css"]
})
export class PilotageItemComponent implements OnInit {
  @Input() pilotage;

  constructor() {}

  ngOnInit() {}
}
