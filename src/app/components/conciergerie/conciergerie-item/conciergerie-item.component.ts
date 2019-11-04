import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ServiceService } from "src/app/service/service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-conciergerie-item",
  templateUrl: "./conciergerie-item.component.html",
  styleUrls: ["./conciergerie-item.component.css"]
})
export class ConciergerieItemComponent implements OnInit {
  @Input() service;
  @Input() listServices;
  @Output() selectService = new EventEmitter();
  constructor(private router: Router, private srvService: ServiceService) {}

  ngOnInit() {}
  onSelect(service) {
    // this.selectService.emit(service);

    console.log("emitted", service);
  }
}
