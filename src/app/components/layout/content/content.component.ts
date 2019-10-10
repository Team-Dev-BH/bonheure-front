import { Component, OnInit } from "@angular/core";
import { fade } from "../../../animations/animations";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
  animations: [fade]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
