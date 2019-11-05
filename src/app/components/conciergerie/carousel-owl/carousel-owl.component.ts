import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter
} from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import * as $ from "jquery";
import { ServiceService } from "src/app/service/service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-carousel-owl",
  templateUrl: "./carousel-owl.component.html",
  styleUrls: ["./carousel-owl.component.css"]
})
export class CarouselOwlComponent implements OnInit, AfterViewInit {
  @Input() service;
  @Input() categoriesList;
  @Output() selectService = new EventEmitter();

  customOptions: OwlOptions = {
    autoHeight: true,
    center: true,
    margin: 5,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  };

  constructor(private router: Router, private srvService: ServiceService) {}

  ngOnInit() {}
  onSelect(service) {
    this.selectService.emit(service);
  }
  ngAfterViewInit() {}
}
