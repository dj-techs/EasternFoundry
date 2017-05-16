import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CorporateProfileComponent } from './pages/corporate-profile/corporate-profile.component';
import { CorporateProfileEditComponent } from './pages/corporate-profile-edit/corporate-profile-edit.component'
import { ProfileComponent } from './pages/profile/profile.component';
import { PastPerformanceComponent } from './pages/past-performance/past-performance.component';
import { PastPerformanceEditComponent } from './pages/past-performance-edit/past-performance-edit.component';
import { NoContentComponent } from './pages/no-content/no-content.component';


export const ROUTES: Routes = [

  { path: '',      component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'user-profile/:id',      component: ProfileComponent },
  { path: 'corporate-profile/:id', component: CorporateProfileComponent },
  { path: 'past-performance/:id', component: PastPerformanceComponent},
  { path: 'user-profile-edit/:id',      component: ProfileComponent },
  { path: 'corporate-profile-edit/:id', component: CorporateProfileEditComponent },
  { path: 'past-performance-edit/:id', component: PastPerformanceComponent},
  { path: 'user-profile-create',      component: ProfileComponent },
  { path: 'corporate-profile-create', component: CorporateProfileComponent },
  { path: 'past-performance-create', component: PastPerformanceEditComponent},
  { path: '**',    component: NoContentComponent },
];
