import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-tel",
  templateUrl: "./add-tel.component.html",
  styleUrls: ["./add-tel.component.css"]
})
export class AddTelComponent implements OnInit {
  numeroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initFormNumber();
  }
  initFormNumber() {
    this.numeroForm = this.formBuilder.group({
      numero: ["", Validators.required]
    });
  }

  onSubmitFormNumero() {
    const formValue = this.numeroForm.value;

    console.log(this.numeroForm.value);
  }
}
