import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/pages/home/home.component';


const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    //TODO : Fix the path later
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'login',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
