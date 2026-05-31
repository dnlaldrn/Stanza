import { Routes } from '@angular/router';
import { HomePage } from './features/pages/home-page/home-page';
import { AboutPage } from './features/pages/about-page/about-page';
import { LoginPage } from './features/pages/login-page/login-page';
import { SignUpPage } from './features/pages/sign-up-page/sign-up-page';
import { DonationPage } from './features/pages/donation-page/donation-page';
import { ListingPage } from './features/pages/listing-page/listing-page';
import { FeedbackPage } from './features/pages/feedback-page/feedback-page';
import { PropertyDetailsPage } from './features/pages/property-details-page/property-details-page';
import { PropertyDetailsComponent } from './features/components/property-details-component/owner-details-component';
import { authGuard } from './core/auth/auth.guard';
import { ProfilePage } from './features/pages/profile-page/profile-page';
import { DashboardPage } from './features/pages/dashboard-page/dashboard-page';
import { landlordGuard } from './core/auth/landlord.guard';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'login', component: LoginPage },
  { path: 'sign-up', component: SignUpPage },
  { path: 'donation', component: DonationPage },
  { path: 'listing', canActivate: [authGuard], component: ListingPage },
  { path: 'feedback', component: FeedbackPage },
  { path: 'property/:propertyId', canActivate: [authGuard], component: PropertyDetailsPage },
  { path: 'dashboard', canActivate: [landlordGuard], component: DashboardPage },
  { path: 'profile', component: ProfilePage },
];
