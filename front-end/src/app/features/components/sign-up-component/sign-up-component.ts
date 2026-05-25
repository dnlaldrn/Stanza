import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;

  const confirmPassword = control.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return {
      mismatch: true,
    };
  }

  return null;
}

@Component({
  selector: 'app-sign-up-component',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up-component.html',
})
export class SignUpComponent {
  private fb = inject(FormBuilder);

  private auth = inject(AuthService);

  loading = false;

  signUpForm = this.fb.group(
    {
      fullName: ['', Validators.required],

      role: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],

      confirmPassword: ['', Validators.required],
    },
    {
      validators: passwordMatchValidator,
    },
  );

  async onSubmit() {
    this.loading = !this.loading;
    if (this.signUpForm.invalid) {
      return;
    }

    try {
      const { email, password, fullName, role } = this.signUpForm.getRawValue();

      await this.auth.register(email!, password!, {
        fullName: fullName!,
        role: role!,
      });

      alert('Check your email to verify your account before logging in.');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
