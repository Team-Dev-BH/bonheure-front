import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "src/app/service/service.service";

@Component({
  selector: "app-parametre-securite",
  templateUrl: "./parametre-securite.component.html",
  styleUrls: ["./parametre-securite.component.css"]
})
export class ParametreSecuriteComponent implements OnInit {
  // @Input() listServices;

  constructor(private router: Router, private serviceSrv: ServiceService) {}

  ngOnInit() {
    // let liste = this.serviceSrv.listService;
  }

  ajout_pres() {
    this.router.navigate(["home/parametre_securite"]);
    alert("Vous avez ajoutés le prestation {{ }}");
  }
  ajout_tel() {
    this.router.navigate(["home/parametre_securite"]);
    alert("Vous avez ajoutés un numéro de téléphone {{ }}");
  }

  ajout_adresse() {
    this.router.navigate(["home/parametre_securite"]);
    alert("Vous avez ajoutés une adresse {{ }}");
  }
}
