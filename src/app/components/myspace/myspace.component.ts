import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "src/app/service/user.service";

@Component({
  selector: "app-myspace",
  templateUrl: "./myspace.component.html",
  styleUrls: ["./myspace.component.css"]
})
export class MyspaceComponent implements OnInit {
  listUser;
  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.listUser = this.userService.User;
    console.log(this.listUser);
  }
}
