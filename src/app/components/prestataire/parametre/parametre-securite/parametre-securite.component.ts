import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "src/app/service/service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-parametre-securite",
  templateUrl: "./parametre-securite.component.html",
  styleUrls: ["./parametre-securite.component.css"]
})
export class ParametreSecuriteComponent implements OnInit {
  constructor(
    private router: Router,
    private serviceSrv: ServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  ajout_pres() {
    this.router.navigate(["home/parametre_securite"]);
    alert("Vous avez ajoutés le prestation {{ }}");
  }
  ajout_tel() {
    this.router.navigate(["home/parametre_securite"]);
    alert("Vous avez ajoutés un numéro de téléphone {{ }}");
  }

  // ajout_adresse() {
  //   this.router.navigate(["home/parametre_securite"]);
  //   alert("Vous avez ajoutés une adresse {{ }}");
  // }
}
