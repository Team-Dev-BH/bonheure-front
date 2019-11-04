import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-adresse",
  templateUrl: "./add-adresse.component.html",
  styleUrls: ["./add-adresse.component.css"]
})
export class AddAdresseComponent implements OnInit {
  adresseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initFormAdress();
  }

  initFormAdress() {
    this.adresseForm = this.formBuilder.group({
      adresse: ["", Validators.required]
    });
  }

  onSubmitFormAdress() {
    const formValue = this.adresseForm.value;

    console.log(this.adresseForm.value);
  }
}
