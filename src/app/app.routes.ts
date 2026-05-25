import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { UserListComponent } from './features/dashboard/user-list/user-list.component';
import { UserDetailComponent } from './features/dashboard/user-detail/user-detail.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/user-details/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
];