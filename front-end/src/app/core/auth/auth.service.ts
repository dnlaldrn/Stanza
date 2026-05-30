import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { supabase } from '../config/supabase.client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<any>(null);
  loading = false;
  fullName = computed(() => {
    return this.currentUser()?.user_metadata?.full_name ?? '';
  });

  initials = computed(() => {
    const name = this.fullName();

    if (!name) {
      return '?';
    }

    return name
      .split(' ')
      .map((word: string) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  });

  role = computed(() => {
    return this.currentUser()?.user_metadata?.role;
  });

  constructor(private router: Router) {}

  async register(
    email: string,
    password: string,
    metadata: {
      fullName: string;
      role: string;
    },
  ) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          full_name: metadata.fullName,
          role: metadata.role,
        },

        emailRedirectTo: `${environment.appUrl}/login`,
      },
    });

    if (error) {
      throw error;
    }

    return data;
  }
  async init() {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      this.currentUser.set(data.session.user);
    }

    // keep it in sync on auth state changes
    supabase.auth.onAuthStateChange((event, session) => {
      this.currentUser.set(session?.user ?? null);
    });
  }

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    this.currentUser.set(data.user);

    const role = this.role();
    if (role === 'Landlord') {
      await this.router.navigate(['/dashboard']);
    } else {
      // Default to listing for boarders or other roles
      await this.router.navigate(['/listing']);
    }
  }
  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
      return;
    }
    // onAuthStateChange will handle setting currentUser to null
    await this.router.navigate(['/login']);
  }
}
