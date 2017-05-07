import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CorporateProfileComponent } from './pages/corporate-profile/corporate-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PastPerformanceComponent } from './pages/past-performance/past-performance.component';
import { PastPerformanceCreateComponent } from './pages/past-performance-create/past-performance-create.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

export const ROUTES: Routes = [

  { path: '',      component: CorporateProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user-profile/:id',      component: ProfileComponent },
  { path: 'corporate-profile/:id', component: CorporateProfileComponent },
  { path: 'past-performance/:id', component: PastPerformanceComponent},
  { path: 'past-performance-create', component: PastPerformanceCreateComponent},
  { path: '**',    component: NoContentComponent },
];
