import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'project/:id', component:ProjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    anchorScrolling: "enabled",
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
