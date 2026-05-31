import { Component } from '@angular/core';
import {ProfileComponent} from '../../components/profile-component/profile-component'

@Component({
  selector: 'app-profile-page',
  imports: [ProfileComponent],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {}
