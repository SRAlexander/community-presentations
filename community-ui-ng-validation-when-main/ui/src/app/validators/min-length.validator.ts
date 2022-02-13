import { AbstractControl, FormControl } from '@angular/forms';

export class MinLengthValidator {

    static configMinLength = () => {
        return (control: FormControl)  => {
            if (control.value !== null && control.value.length <= 3) {
                return { minLengthError: true };
            }
            return null;
        }
    }

    static dynamicMinLength = (minLength:number) => {
        return (control: FormControl) => {
            if (control.value !== null && control.value.length <= minLength) {
                return { minLengthError: true };
            }
            return null;
        }
    }
}