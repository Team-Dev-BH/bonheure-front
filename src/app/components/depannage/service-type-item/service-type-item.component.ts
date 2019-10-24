import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-service-type-item",
  templateUrl: "./service-type-item.component.html",
  styleUrls: ["./service-type-item.component.css"]
})
export class ServiceTypeItemComponent implements OnInit {
  @Input() type;
  constructor() {}

  ngOnInit() {}
}
