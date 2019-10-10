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

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  };
}
