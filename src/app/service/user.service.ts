import { Injectable } from "@angular/core";
import { User } from "../entities/user.model";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  private users: User[] = [];

  constructor() {}
}
