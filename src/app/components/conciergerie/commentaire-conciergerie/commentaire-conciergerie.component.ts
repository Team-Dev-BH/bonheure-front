import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-commentaire-conciergerie",
  templateUrl: "./commentaire-conciergerie.component.html",
  styleUrls: ["./commentaire-conciergerie.component.css"]
})
export class CommentaireConciergerieComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  delai() {
    this.router.navigate(["/home/recap_conciergerie"]);
  }
}
