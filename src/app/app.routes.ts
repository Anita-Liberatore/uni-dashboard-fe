import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { StudyPlanComponent } from './pages/study-plan/study-plan.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '',            component: HomeComponent      },
  { path: 'exams',       component: ExamsComponent     },
  { path: 'study-plan',  component: StudyPlanComponent },
  { path: 'calendar',    component: CalendarComponent  },
  { path: 'profile',     component: ProfileComponent   },
];
