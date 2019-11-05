import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { element } from "protractor";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categorie } from "../entities/categorie.model";
import { Prestation } from "../entities/prestation.model";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  CategorielistSubject = new Subject<any[]>();
  singleServiceSubject = new Subject<any>();

  // categories URL :
  private categoriesUrl = "http://localhost:8080/categories/getallCategory";

  // prestiation by categories Name URL :
  private PrestationByCategoryNameUrl =
    "http://localhost:8080/prestations/prestationByCategoryName?categoryName=Quotidien";

  constructor(private http: HttpClient) {}

  getAllCatgories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.categoriesUrl);
  }

  getPrestationByCategoryName(categorieName): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(this.PrestationByCategoryNameUrl);
  }

  // emitListSubject() {
  //   this.listSubject.next(this.listService.slice());
  // }

  // getSingleServiceByReference(reference) {
  //   let selectedItem = this.listService.find(
  //     element => element.reference === reference
  //   );

  //   this.selectedItem = selectedItem;
  //   return selectedItem;
  // }

  // getPrestationByReference(referenceCategorie, referencePrestation) {
  //   let selectedItem = this.listService.find(
  //     element => element.reference === referenceCategorie
  //   );

  //   let finalItem = selectedItem.services.find(
  //     element => element.reference === referencePrestation
  //   );

  //   this.selectedPrestation = finalItem;

  //   return finalItem;
  // }
}
