import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchText;

  @Output() send = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendText() {
    this.send.emit(this.searchText);
    console.log(this.searchText);
  }
}
