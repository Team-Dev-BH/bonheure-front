import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import * as $ from "jquery";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent implements OnInit, AfterViewInit {
  accueilList = [];

  @Input() listServices;
  customOptions: OwlOptions = {
    autoHeight: true,
    center: true,
    margin: 9,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    autoWidth: true,
    navText: ["<", ">"],
    responsive: {
      0: { items: 1 },
      600: { items: 2 }
      // 740: { items: 3 }
    },
    nav: true
  };

  constructor() {}

  ngOnInit() {
    this.accueilList = [
      { title: " Préstation passées", notification: 13 },
      { title: "Commandes en cours", notification: 6 },
      { title: "Devis envoyés", notification: 3 }
    ];
  }
  ngAfterViewInit() {}
}
