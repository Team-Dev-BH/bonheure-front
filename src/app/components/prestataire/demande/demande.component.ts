import { Component, OnInit } from "@angular/core";
import { DemandeServiceService } from "src/app/service/demande-service.service";

@Component({
  selector: "app-demande",
  templateUrl: "./demande.component.html",
  styleUrls: ["./demande.component.css"]
})
export class DemandeComponent implements OnInit {
  demandeList;
  searchText = "";

  constructor(private demandeService: DemandeServiceService) {}

  // useSearchText(text) {
  //   this.searchText = text;
  // }

  
  ngOnInit() {
    this.demandeList = this.demandeService.demandeList;
    console.log(this.demandeList);
  }
}
