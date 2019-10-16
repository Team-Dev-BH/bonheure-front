import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  listSubject = new Subject<any[]>();

  private listService = [
    {
      reference: 1,
      categorie: "Quotidien",
      services: [
        "plomberie",
        "chaud-froid",
        "electricité",
        "peinture",
        "vitrerie",
        "a la demande"
      ]
    },
    {
      reference: 2,
      categorie: "Depannage",
      services: [
        "service1 dep",
        "service2 dep",
        "service3 dep",
        "service4 dep",
        "service5 dep",
        "service6 dep"
      ]
    },
    {
      reference: 3,
      categorie: "Services clients",
      services: ["service1 cli", "service2 cli", "service3 cli"]
    },
    {
      reference: 4,
      categorie: "Grands projets",
      services: ["service1 gp", "service2 gp"]
    },
    {
      reference: 5,
      categorie: "Bien etre",
      services: [
        "service1 be",
        "service2 be",
        "service3 be",
        "service4 be",
        "service5 be"
      ]
    },
    {
      reference: 6,
      categorie: "A la demande",
      services: ["service1 ad", "service2 ad", "service3 ad", "service4 ad"]
    }
  ];

  constructor() {}

  emitListSubject() {
    this.listSubject.next(this.listService.slice());
  }
}
