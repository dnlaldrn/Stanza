import { booleanAttribute, Component, inject } from '@angular/core';
import {AuthService} from '../../../core/auth/auth.service'

@Component({
  selector: 'app-profile-component',
  imports: [],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {
  isEditingPersonal = false;
  isEditingPassword = false;
  isEditingEmail= false;

  public auth = inject(AuthService);
}

