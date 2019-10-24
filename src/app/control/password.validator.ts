import { AbstractControl } from "@angular/forms";
import { Key } from "protractor";

export function PasswordValidator(
  control: AbstractControl
): { [Key: string]: boolean } | null {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  return password && confirmPassword && password.value != confirmPassword.value
    ? { misMatch: true }
    : null;
}
