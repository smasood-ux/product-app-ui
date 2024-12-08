import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { MainNevComponent } from './nav/main-nev.component';
import { HomeComponent } from './components/home.component';
import { ProductListComponent } from './products/product-list.component';
import { AuthGuard } from './services/auth.guard';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];
