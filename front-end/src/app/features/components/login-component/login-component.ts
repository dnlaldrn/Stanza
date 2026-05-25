import { Component, inject } from '@angular/core';

import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-component',

  standalone: true,

  imports: [ReactiveFormsModule, RouterLink],

  templateUrl: './login-component.html',
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  private auth = inject(AuthService);

  loading = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],

    password: ['', Validators.required],
  });

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      return;
    }

    try {
      this.loading = true;

      const { email, password } = this.loginForm.getRawValue();

      await this.auth.login(email!, password!);
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }
}
