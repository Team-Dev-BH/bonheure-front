import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/service/message.service";

@Component({
  selector: "app-recieved-message",
  templateUrl: "./recieved-message.component.html",
  styleUrls: ["./recieved-message.component.css"]
})
export class RecievedMessageComponent implements OnInit {
  messageListePres;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageListePres = this.messageService.messageListePres;
    console.log(this.messageListePres);
  }
}
