import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { PasswordValidator } from "../../../control/password.validator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  get firstName() {
    return this.registerForm.get("firstName");
  }

  get lastName() {
    return this.registerForm.get("lastName");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get mobileNumber() {
    return this.registerForm.get("mobileNumber");
  }

  get date_naissance() {
    return this.registerForm.get("date_naissance");
  }

  get fonction() {
    return this.registerForm.get("fonction");
  }
  // get password() {
  //   return this.registerForm.get("password");
  // }
  // get confirmPassword() {
  //   return this.registerForm.get("confirmPassword");
  // }
  get code() {
    return this.registerForm.get("code");
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.intiForm();
  }

  intiForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      mobileNumber: ["", Validators.required],
      date_naissance: ["", Validators.required],
      fonction: ["", Validators.required],
      password: [""],
      confirmPassword: ["", PasswordValidator],

      code: ["", Validators.required]
    });

    this.registerForm.controls.password.valueChanges.subscribe(x =>
      this.registerForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  onSubmitForm() {
    const formValue = this.registerForm.value;

    console.log(this.registerForm.value);
  }
}
