import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import * as $ from "jquery";

@Component({
  selector: "app-carousel-owl",
  templateUrl: "./carousel-owl.component.html",
  styleUrls: ["./carousel-owl.component.css"]
})
export class CarouselOwlComponent implements OnInit, AfterViewInit {
  @Input() listServices;
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
    navText: ["<", ">"],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
