import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  listSubject = new Subject<any[]>();

  private listService = [
    { categorie: "Quotidien" },
    { categorie: "Depannage" },
    { categorie: "Service au clients" },
    { categorie: "Grands projets" },
    { categorie: "Bien etre" },
    { categorie: "A la demande" }
  ];

  constructor() {}

  emitListSubject() {
    this.listSubject.next(this.listService.slice());
  }
}
