import { Injectable } from "@angular/core";
import { User } from "../entities/user.model";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  User = [
    {
      firstName: "Mouhamed",
      lastName: "Ayedi",
      email: "nom.prenom@email.com",
      mobileNumber: "+ 216 50 05 55",
      fonction: "RSSI à L'Oréal"
    }
  ];

  constructor() {}
}
