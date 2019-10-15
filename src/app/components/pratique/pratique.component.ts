import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pratique",
  templateUrl: "./pratique.component.html",
  styleUrls: ["./pratique.component.css"]
})
export class PratiqueComponent implements OnInit {
  listPratique = [];

  constructor() {}

  ngOnInit() {
    this.listPratique = [
      {
        lienVideo: "video.mp4",
        titre: "Comment ça marche ?",
        image: "comment1.PNG"
      },
      {
        lienVideo: "video2.mp4",
        titre: "Comment Personnaliser ma conciergerie?",
        image: "comment2.PNG"
      },
      {
        lienVideo: "video4.mp4",
        titre: "Comment upgrader mon butler?",
        image: "comment3.PNG"
      }
    ];
  }
}
