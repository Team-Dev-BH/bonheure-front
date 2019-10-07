import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-how-it-works",
  templateUrl: "./how-it-works.component.html",
  styleUrls: ["./how-it-works.component.css"]
})
export class HowItWorksComponent implements OnInit, AfterViewInit {
  closeResult: string;

  @ViewChild("content", { static: false }) myModal: Component;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.open(this.myModal);
  }

  open(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: "modal-basic-title",
        size: "xl",
        windowClass: "lodal-xl"
      })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
