import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { element } from "protractor";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  listSubject = new Subject<any[]>();
  singleServiceSubject = new Subject<any>();

  selectedItem;
  selectedPrestation;

  private listService = [
    {
      reference: 1,
      categorie: "Quotidien",
      services: [
        {
          reference: 1,
          type: "plomberie",
          sousPrestation: [
            { reference: 1, type: "WC" },
            { reference: 2, type: "Fuite d'eau ou engorgement" },
            { reference: 3, type: "Installation ou changement d'equipements" },
            { reference: 4, type: "Robinetterie" },
            { reference: 5, type: "Chauf eau" },
            { reference: 6, type: "Autres" }
          ]
        },
        {
          reference: 2,
          type: "chaud-froid",
          sousPrestation: [
            { reference: 1, type: "vkjifji" },
            { reference: 2, type: "vkjifji" },
            { reference: 3, type: "vkjifji" }
          ]
        },
        {
          reference: 3,
          type: "electricité",
          sousPrestation: [{ reference: 1, type: "bleblas" }]
        },
        {
          reference: 4,
          type: "peinture",
          sousPrestation: [{ reference: 1, type: "idjiuf" }]
        },
        {
          reference: 5,
          type: "vitrerie",
          sousPrestation: [{ reference: 1, type: "kdfuyf" }]
        },
        {
          reference: 6,
          type: "a la demande",
          sousPrestation: [{ reference: 1, type: "ddfjhf" }]
        }
      ]
    },
    {
      reference: 2,
      categorie: "Depannage",
      services: [
        {
          reference: 1,
          type: "servie x",
          sousPrestation: [{ reference: 1, type: "kffjuf" }]
        },
        {
          reference: 2,
          type: "service",
          sousPrestation: [{ reference: 1, type: "lorem ipsum" }]
        },
        {
          reference: 3,
          type: "service wx",
          sousPrestation: [{ reference: 1, type: "hjiuhfuhgt" }]
        },
        {
          reference: 4,
          type: "service xx",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 5,
          type: "service xxxx",
          sousPrestation: [{ reference: 1, type: "WC" }]
        }
      ]
    },
    {
      reference: 3,
      categorie: "Service clients",
      services: [
        {
          reference: 1,
          type: "servie x",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 2,
          type: "service",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 3,
          type: "service wx",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 4,
          type: "service xx",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 5,
          type: "service xxxx",
          sousPrestation: [{ reference: 1, type: "WC" }]
        }
      ]
    },
    {
      reference: 4,
      categorie: "Grands projets",
      services: [
        {
          reference: 1,
          type: "servie x",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 2,
          type: "service",
          sousPrestation: [{ reference: 1, type: "WC" }]
        }
      ]
    },
    {
      reference: 5,
      categorie: "Bien etre",
      services: [
        {
          reference: 1,
          type: "servie x",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 2,
          type: "service",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 3,
          type: "service wx",
          sousPrestation: [{ reference: 1, type: "WC" }]
        }
      ]
    },
    {
      reference: 6,
      categorie: "A la demande",
      services: [
        {
          reference: 1,
          type: "servie A",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 2,
          type: "service AA",
          sousPrestation: [{ reference: 1, type: "WC" }]
        },
        {
          reference: 3,
          type: "service AAA",
          sousPrestation: [{ reference: 1, type: "WC" }]
        }
      ]
    }
  ];
  listServices: any;

  constructor() {}

  emitListSubject() {
    this.listSubject.next(this.listService.slice());
  }

  getSingleServiceByReference(reference) {
    let selectedItem = this.listService.find(
      element => element.reference === reference
    );

    this.selectedItem = selectedItem;
    return selectedItem;
  }

  getPrestationByReference(referenceCategorie, referencePrestation) {
    let selectedItem = this.listService.find(
      element => element.reference === referenceCategorie
    );

    let finalItem = selectedItem.services.find(
      element => element.reference === referencePrestation
    );

    this.selectedPrestation = finalItem;

    return finalItem;
  }
}
