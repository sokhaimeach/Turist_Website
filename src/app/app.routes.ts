import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Account } from './account/account';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'profile', component: Account},
];
