import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "src/app/entities/user.model";

@Component({
  selector: "app-register-pres",
  templateUrl: "./register-pres.component.html",
  styleUrls: ["./register-pres.component.css"]
})
export class RegisterPresComponent implements OnInit {
  register_preForm: FormGroup;

  get firstName() {
    return this.register_preForm.get("firstName");
  }

  get lastName() {
    return this.register_preForm.get("lastName");
  }
  get email() {
    return this.register_preForm.get("email");
  }
  get mobileNumber() {
    return this.register_preForm.get("mobileNumber");
  }
  get fonction() {
    return this.register_preForm.get("fonction");
  }
  get password() {
    return this.register_preForm.get("password");
  }
  get confirmPassword() {
    return this.register_preForm.get("confirmPassword");
  }

  get code() {
    return this.register_preForm.get("code");
  }
  get rue() {
    return this.register_preForm.get("rue");
  }
  get postalCode() {
    return this.register_preForm.get("postalCode");
  }

  get region() {
    return this.register_preForm.get("region");
  }

  get type() {
    return this.register_preForm.get("type");
  }

  get prestation() {
    return this.register_preForm.get("prestation");
  }

  get categorie() {
    return this.register_preForm.get("categorie");
  }
  get type_pres() {
    return this.register_preForm.get("type_pres");
  }

  // userModel = new User(
  //   "gd",
  //   "sagre",
  //   "gre",
  //   "fhb@gmail.com",
  //   "6568",
  //   "fdsf",
  //   true
  // );

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.register_preForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      mobileNumber: ["", [Validators.required, Validators.minLength(8)]],
      startActivityDate: [],
      fonction: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      code: ["", Validators.required],
      rue: ["", Validators.required],
      postalCode: ["", Validators.required],
      region: ["", Validators.required],
      type: ["", Validators.required],
      registration: ["", Validators.required],
      prestation: ["", Validators.required],
      categorie: ["", Validators.required],
      type_pres: ["", Validators.required]
    });
  }
  onSubmitForm() {
    const formValue = this.register_preForm.value;

    console.log(this.register_preForm.value);
  }
}
