import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EsamiComponent } from './pages/esami/esami.component';
import { PianoComponent } from './pages/piano/piano.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'esami', component: EsamiComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'profile', component: ProfileComponent }
];
