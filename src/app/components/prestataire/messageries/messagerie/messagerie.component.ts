import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-messagerie",
  templateUrl: "./messagerie.component.html",
  styleUrls: ["./messagerie.component.css"]
})
export class MessagerieComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  received_message() {
    this.router.navigate(["home/messageries/received_message"]);
  }

  new_message() {
    this.router.navigate(["home/messageries/new_message"]);
  }
}
