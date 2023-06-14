import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AppComponent } from './app.component';
import { NoComponentComponent } from './no-component/no-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { MovieItemsComponent } from './movie-items/movie-items.component';

const routes: Routes = [
   {path:'',component:HomeComponentComponent},
  {path:'movies',component:MovielistComponent},
  {path:'todo',component:TodolistComponent},
  {path:'forms',component:FormsExampleComponent},
  {path : 'newmovielist',component:MovieItemsComponent},
  


  
  {path:'**',component:NoComponentComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
