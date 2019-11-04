import { AbstractControl } from "@angular/forms";
import { Key } from "protractor";

// export function PasswordValidator(
//   control: AbstractControl
// ): { [Key: string]: boolean } | null {
//   const password = control.get("password");
//   const confirmPassword = control.get("confirmPassword");

//   return password && confirmPassword && password.value != confirmPassword.value
//     ? { misMatch: true }
//     : null;
// }

export function PasswordValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const confirmPassword = control.value;
    const passControl = control.root.get("password"); //magic is this
    if (passControl) {
      const passValue = passControl.value;
      if (passValue !== confirmPassword) {
        return {
          isError: true
        };
      }
    }
  }

  return null;
}
