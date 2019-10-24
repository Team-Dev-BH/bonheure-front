import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-pres-acc",
  templateUrl: "./register-pres-acc.component.html",
  styleUrls: ["./register-pres-acc.component.css"]
})
export class RegisterPresAccComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  registerEntrepreneur() {
    this.router.navigate(["/register_pres"]);
  }

  registerSociete() {
    this.router.navigate(["/register_pres_soci"]);
  }
}
