import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choix-pres-evaluation",
  templateUrl: "./choix-pres-evaluation.component.html",
  styleUrls: ["./choix-pres-evaluation.component.css"]
})
export class ChoixPresEvaluationComponent implements OnInit {
  image = "pppp.jpg";
  name = "Mohamed";
  avis = "18 ";
  disponibilite = "Disponible dans 1h30";
  prix = "23 - 25 dt";
  constructor() {}

  ngOnInit() {}
}
