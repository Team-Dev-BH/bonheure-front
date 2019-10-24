import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parametre",
  templateUrl: "./parametre.component.html",
  styleUrls: ["./parametre.component.css"]
})
export class ParametreComponent implements OnInit {
  userList = [];
  constructor() {}

  ngOnInit() {
    this.userList = [
      { name: "Hamadi Abidi" },
      { phoneNumber: "+216 21 334 556" },
      { email: "hamadi.abidi@gmail.com " },
      { adress: "Rue 812,Impasse 3 - El Manzah 3- 1004 " }
    ];

    // let userList = {
    //   name: "Hamadi Abidi",
    //   phoneNumber: "+216 21 334 556",
    //   email: "hamadi.abidi@gmail.com",
    //   adress: "Rue 812,Impasse 3 - El Manzah 3- 1004"
    // };
  }
}
