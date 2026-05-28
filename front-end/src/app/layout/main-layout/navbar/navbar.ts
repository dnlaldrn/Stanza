import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  
 public auth = inject(AuthService);
  open = signal(false);
  toggleMenu() {
    this.open.update((value) => !value);
  }

   async ngOnInit() {
    await this.auth.init();
  }
  async logout() {
    this.open.set(false);
  await this.auth.logout();
  console.log("logging out")
}

   
}
