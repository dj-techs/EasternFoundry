import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CorporateProfileComponent } from './pages/corporate-profile/corporate-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { PastPerformanceComponent } from './pages/past-performance/past-performance.component';
import { PastPerformanceCreateComponent } from './pages/past-performance-create/past-performance-create.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

export const ROUTES: Routes = [

  { path: '',      component: CorporateProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user-profile/:id',      component: ProfileComponent },
  { path: 'add-account',  component: AddAccountComponent },
  { path: 'corporate-profile', component: CorporateProfileComponent },
  { path: 'past-performance', component: PastPerformanceComponent},
  { path: 'past-performance-create', component: PastPerformanceCreateComponent},
  { path: '**',    component: NoContentComponent },
];
