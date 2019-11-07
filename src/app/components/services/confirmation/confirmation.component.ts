import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.css"]
})
export class ConfirmationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  //back to recap page:
  recap() {
    this.router.navigate(["home/recap"]);
  }

  // back to homepage:
  acceuil() {
    this.router.navigate(["home"]);
  }
}
