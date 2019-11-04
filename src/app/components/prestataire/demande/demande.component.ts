import { Component, OnInit } from "@angular/core";
import { DemandeServiceService } from "src/app/service/demande-service.service";

@Component({
  selector: "app-demande",
  templateUrl: "./demande.component.html",
  styleUrls: ["./demande.component.css"]
})
export class DemandeComponent implements OnInit {
  messageList;
  constructor(private demandeService: DemandeServiceService) {}

  ngOnInit() {
    this.messageList = this.demandeService.messageList;
    console.log(this.messageList);
  }
}
