import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { FetchWithInputComponent } from './components/fetchWithInput/fetch-with-input/fetch-with-input.component';

const routes: Routes = [
  {
    path:'fetch-with-input', component:FetchWithInputComponent
  },
  {
    path:'',component:DashboardComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
