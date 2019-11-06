import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messageListePres = [
    {
      date: "24/06/2019",
      lastName: "Hamami",
      firstName: "Mohamed",
      sujet: "demande d'un plomberie",
      status: "***"
    },
    {
      date: "24/06/2019",
      lastName: "Hamami",
      firstName: "mariem",
      sujet: "demande d'un plomberie",
      status: "***"
    }
  ];
  constructor() {}
}
