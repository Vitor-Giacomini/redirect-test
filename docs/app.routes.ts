import { Routes } from '@angular/router';
import { DashboardComponent } from '../src/app/pages/dashboard/dashboard.component';
import { RedirectComponent } from '../src/app/pages/redirect/redirect.component';
import { ErrorComponent } from '../src/app/pages/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'error', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'redirect', redirectTo: 'error', pathMatch: 'full' },
    { path: 'redirect/:partnerCode', component: RedirectComponent },
    { path: 'error', component: ErrorComponent}
];
