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

  loading = false;
  async handleLogout(event: Event) {
  console.log('logout clicked');


  event.stopPropagation();

  await this.auth.logout();
  this.loading = true;
}
   
}
