import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path : '', redirectTo:"/auth/login", pathMatch: "full" },
  { 
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      { 
        path: 'profile', 
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) 
      },
      { 
        path: 'organization', 
        loadChildren: () => import('./modules/organization/organization.module').then(m => m.OrganizationModule) 
      },
      { 
        path: 'leave', 
        loadChildren: () => import('./modules/leave/leave.module').then(m => m.LeaveModule) 
      },
      { 
        path: 'holiday', 
        loadChildren: () => import('./modules/holiday/holiday.module').then(m => m.HolidayModule) 
      }
    ]
  },
  { path: 'holiday', loadChildren: () => import('./modules/holiday/holiday.module').then(m => m.HolidayModule) },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
