import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-parametre-securite-item",
  templateUrl: "./parametre-securite-item.component.html",
  styleUrls: ["./parametre-securite-item.component.css"]
})
export class ParametreSecuriteItemComponent implements OnInit {
  @Input() pres;

  parametre_securite: FormGroup;
  get prestataire() {
    return this.parametre_securite.get("prestataire");
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.parametre_securite = this.formBuilder.group({
      prestataire: ["", Validators.required]
    });
  }
  onSubmitForm() {
    const formValue = this.parametre_securite.value;

    console.log(this.parametre_securite.value);
  }
}
