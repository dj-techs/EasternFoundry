import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddProfileComponent } from './pages/add-profile/add-profile.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { AddAccountDetailComponent } from './pages/add-account-detail/add-account-detail.component';
import { CorporateProfileComponent } from './pages/corporate-profile/corporate-profile.component';
import { PastPerformanceComponent } from './pages/past-performance/past-performance.component';
import { PastPerformanceCreateComponent } from './pages/past-performance-create/past-performance-create.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng2-bootstrap/rating';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { ChartsModule } from 'ng2-charts';

import { ROUTES } from './app.routes';
import { BentBarsChartComponent } from './components/bent-bars-chart/bent-bars-chart.component';
import { ColorCommentBoxComponent } from './components/color-comment-box/color-comment-box.component';
import { ExpChartComponent } from './components/exp-chart/exp-chart.component';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AddProfileComponent,
    AddAccountComponent,
    AddAccountDetailComponent,
    CorporateProfileComponent,
    PastPerformanceComponent,
    PastPerformanceCreateComponent,
    NoContentComponent,
    BentBarsChartComponent,
    ColorCommentBoxComponent,
    ExpChartComponent,
    CareerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RatingModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
