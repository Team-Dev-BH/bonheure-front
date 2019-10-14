import { Component, OnInit } from "@angular/core";
import { fade } from "../../../animations/animations";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
  animations: [fade]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData["fade"]
    );
  }
}
