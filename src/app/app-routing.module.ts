import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LogInComponent } from './login/login.component';
import { AuthGuard1Guard } from './auth-guard1.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard1Guard],
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    // canActivate: [AuthGuard],
    canActivate: [AuthGuard1Guard],
  },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
