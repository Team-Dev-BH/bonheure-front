import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "../../service/service.service";

@Component({
  selector: "app-service-item",
  templateUrl: "./service-item.component.html",
  styleUrls: ["./service-item.component.css"]
})
export class ServiceItemComponent implements OnInit {
  @Input() service;
  @Input() listServices;
  @Output() selectService = new EventEmitter();

  constructor(private router: Router, private srvService: ServiceService) {}

  ngOnInit() {}

  onSelect(service) {
    this.selectService.emit(service);
  }
}
