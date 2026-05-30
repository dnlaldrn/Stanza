import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const landlordGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.role();

  if (role === 'Landlord') {
    return true;
  }

  router.navigate(['/listing']);
  return false;
};
