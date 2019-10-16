import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  sideBarStatus = true;
  constructor() {}

  ngOnInit() {}

  toggleSideBar() {
    this.sideBarStatus = !this.sideBarStatus;
  }
}
