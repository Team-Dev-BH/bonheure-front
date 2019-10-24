import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register-pres-soci",
  templateUrl: "./register-pres-soci.component.html",
  styleUrls: ["./register-pres-soci.component.css"]
})
export class RegisterPresSociComponent implements OnInit {
  register_pre_sociForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.register_pre_sociForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      adress: ["", Validators.required],
      email: ["", Validators.required],
      mobileNumber: [, Validators.required],
      startActivityDate: [, Validators.required],
      position: ["", Validators.required],
      password: ["", Validators.required],
      code: ["", Validators.required],
      rue: ["", Validators.required],
      postalCode: ["", Validators.required],
      region: ["", Validators.required],
      type: ["", Validators.required],
      registration: ["", Validators.required],
      prestation: ["", Validators.required],
      categorie: ["", Validators.required],
      type_pres: ["", Validators.required],
      employeesCount: ["", Validators.required],
      creationDate: [, Validators.required],
      workingAria: [, Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.register_pre_sociForm.value;

    console.log(this.register_pre_sociForm.value);
  }
}
