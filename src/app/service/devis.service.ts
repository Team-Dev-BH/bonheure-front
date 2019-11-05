import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DevisService {
  devisList = [
    {
      date: "24/06/2019",
      categorie: "Quotidien",
      prestation: "Plomberie",
      sous_prestation: "Robinetterie",
      price: "30 ",
      localisation: "Tunis",
      statut: "***"
    },
    {
      date: "24/06/2019",
      categorie: "Quotidien",
      prestation: "Plomberie",
      sous_prestation: "Robinetterie",
      price: "30 ",
      localisation: "Tunis",
      statut: "***"
    }
  ];
  constructor() {}
}
