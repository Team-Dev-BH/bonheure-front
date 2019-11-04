import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-message",
  templateUrl: "./new-message.component.html",
  styleUrls: ["./new-message.component.css"]
})
export class NewMessageComponent implements OnInit {
  newMessageForm: FormGroup;

  get destinataire() {
    return this.newMessageForm.get("destinataire");
  }

  get message() {
    return this.newMessageForm.get("message");
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newMessageForm = this.formBuilder.group({
      destinataire: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmitFormNewMessage() {
    const formValue = this.newMessageForm.value;

    console.log(this.newMessageForm.value);
  }
}
