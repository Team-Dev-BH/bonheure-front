import { Component, OnInit, Input } from "@angular/core";
import { PrestationServiceService } from "../../../../../service/prestation-service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-prestation",
  templateUrl: "./add-prestation.component.html",
  styleUrls: ["./add-prestation.component.css"]
})
export class AddPrestationComponent implements OnInit {
  listPrestation;
  prestationForm: FormGroup;
  constructor(
    private prestaService: PrestationServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initFormPrestation();

    this.listPrestation = this.prestaService.listPrestation;
    console.log(this.listPrestation);
  }

  initFormPrestation() {
    this.prestationForm = this.formBuilder.group({
      prestation: ["", Validators.required]
    });
  }

  onSubmitFormPrestation() {
    const formValue = this.prestationForm.value;

    console.log(this.prestationForm.value);
  }
}
