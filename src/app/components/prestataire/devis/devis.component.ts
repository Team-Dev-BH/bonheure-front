import { Component, OnInit } from "@angular/core";
import { DevisService } from "src/app/service/devis.service";

@Component({
  selector: "app-devis",
  templateUrl: "./devis.component.html",
  styleUrls: ["./devis.component.css"]
})
export class DevisComponent implements OnInit {
  devisList;
  constructor(private devisService: DevisService) {}

  ngOnInit() {
    this.devisList = this.devisService.devisList;
    console.log(this.devisList);
  }
}
