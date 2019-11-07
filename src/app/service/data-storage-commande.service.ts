import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataStorageCommandeService {
  private routeParams: String[];

  private routeParamsSubject = new BehaviorSubject<String[]>([]);

  constructor() {}

  getRouteParams() {
    return this.routeParamsSubject.asObservable();
  }

  changeRouteParam(routeParam) {
    this.routeParams.push(routeParam);
    this.routeParamsSubject.next(this.routeParams);
  }
}
