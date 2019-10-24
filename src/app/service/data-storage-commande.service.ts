import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataStorageCommandeService {
  private routeParamSubject = new BehaviorSubject<any>(null);
  routeParam = this.routeParamSubject.asObservable();
  constructor() {}

  changeRouteParam(routeParam) {
    this.routeParamSubject.next(routeParam);
  }
}
