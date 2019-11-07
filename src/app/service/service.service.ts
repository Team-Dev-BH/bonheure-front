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
  CategorielistSubject = new Subject<Categorie[]>();

  // categories URL :
  private categoriesUrl = "http://localhost:8080/categories/getallCategory";

  // prestiation by categories Name URL :
  private prestationByCategoryNameUrl =
    "http://localhost:8080/prestations/prestationByCategoryName?categoryName=";

  // prestation by parent name URL :
  private prestationByPrarentNameUrl =
    "http://localhost:8080/prestations/prestationByParentName?ParentName=";

  // prestation by name URL:
  private prestationByNameUrl =
    "http://localhost:8080/prestations/getPrestationByName?name=";

  constructor(private http: HttpClient) {}

  getAllCatgories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.categoriesUrl);
  }

  getPrestationByCategoryName(categorieName: String): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(
      this.prestationByCategoryNameUrl + categorieName
    );
  }

  getPrestationByPrentName(parentName: String): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(
      this.prestationByPrarentNameUrl + parentName
    );
  }

  getPrestationByName(prestationName: String): Observable<Prestation> {
    return this.http.get<Prestation>(this.prestationByNameUrl + prestationName);
  }

  emitcategoriesListSubject() {
    this.CategorielistSubject.next();
  }

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
