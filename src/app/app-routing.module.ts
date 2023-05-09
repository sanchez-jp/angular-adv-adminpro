import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  // Rutas protegidas
  { 
    path: '', 
    component: PagesComponent,
    children: [
      // Todas estas rutas cumplen las mismas condiciones de diseño
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent},
      { path: 'grafica1', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },

  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Ruta por defecto
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) // se importa el modulo de rutas con las rutas principales
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
