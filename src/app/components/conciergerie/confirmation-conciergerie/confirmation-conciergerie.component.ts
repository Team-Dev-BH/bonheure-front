import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirmation-conciergerie",
  templateUrl: "./confirmation-conciergerie.component.html",
  styleUrls: ["./confirmation-conciergerie.component.css"]
})
export class ConfirmationConciergerieComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  acceuil() {
    this.router.navigate(["/home/conciergerie"]);
  }

  recap() {
    this.router.navigate(["/home/recap_conciergerie"]);
  }
}
