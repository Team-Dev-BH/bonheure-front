import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PasswordValidator } from "../../../control/password.validator";
import { relative } from "path";

@Component({
  selector: "app-register-pres-soci",
  templateUrl: "./register-pres-soci.component.html",
  styleUrls: ["./register-pres-soci.component.css"]
})
export class RegisterPresSociComponent implements OnInit {
  register_pre_sociForm: FormGroup;

  get lastName() {
    return this.register_pre_sociForm.get("lastName");
  }

  get firstName() {
    return this.register_pre_sociForm.get("firstName");
  }
  get adress() {
    return this.register_pre_sociForm.get("adress");
  }

  get mobileNumber() {
    return this.register_pre_sociForm.get("mobileNumber");
  }

  get email() {
    return this.register_pre_sociForm.get("email");
  }

  get position() {
    return this.register_pre_sociForm.get("position");
  }

  get creationDate() {
    return this.register_pre_sociForm.get("creationDate");
  }

  get registration() {
    return this.register_pre_sociForm.get("registration");
  }

  get region() {
    return this.register_pre_sociForm.get("region");
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.register_pre_sociForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(4)]],
      lastName: ["", [Validators.required, Validators.minLength(4)]],
      adress: ["", [Validators.required, Validators.minLength(10)]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]
      ],
      mobileNumber: ["", [Validators.required, Validators.minLength(8)]],
      startActivityDate: [, Validators.required],
      position: ["", Validators.required],
      password: [""],
      confirmPassword: ["", PasswordValidator],
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

    this.register_pre_sociForm.controls.password.valueChanges.subscribe(x =>
      this.register_pre_sociForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  onSubmitFormSociete() {
    const formValue = this.register_pre_sociForm.value;

    console.log(this.register_pre_sociForm.value);
  }
}
