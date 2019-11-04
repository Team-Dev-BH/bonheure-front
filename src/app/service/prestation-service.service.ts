import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PrestationServiceService {
  listPrestation = [
    {
      name: "Plomberie"
    },
    {
      name: "Eléctricité"
    },
    {
      name: "Pintre"
    },
    {
      name: "Vitrerie"
    },
    {
      name: "Chaud-froid"
    }
  ];

  constructor() {}
}
