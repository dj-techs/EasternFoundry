import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddProfileComponent } from './pages/add-profile/add-profile.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { AddAccountDetailComponent } from './pages/add-account-detail/add-account-detail.component';
import { PastPerformanceComponent } from './pages/past-performance/past-performance.component';
import { PastPerformanceCreateComponent } from './pages/past-performance-create/past-performance-create.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

export const ROUTES: Routes = [

  { path: '',      component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile',      component: ProfileComponent },
  { path: 'add-profile',  component: AddProfileComponent },
  { path: 'add-account',  component: AddAccountComponent },
  { path: 'add-account-detail',  component: AddAccountDetailComponent },
  //{ path: 'corporate-profile', component: CorporateProfileComponent },
  { path: 'past-performance', component: PastPerformanceComponent},
  { path: 'past-performance-create', component: PastPerformanceCreateComponent},
  { path: '**',    component: NoContentComponent },
];
