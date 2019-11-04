import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-choix-pres-client-item",
  templateUrl: "./choix-pres-client-item.component.html",
  styleUrls: ["./choix-pres-client-item.component.css"]
})
export class ChoixPresClientItemComponent implements OnInit {
  @Input() choix;

  constructor() {}

  ngOnInit() {}
}
