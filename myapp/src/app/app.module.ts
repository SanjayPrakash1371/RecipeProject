import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { CounterComponent } from './counter/counter.component';
import { MovielistComponent } from './movielist/movielist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { NoComponentComponent } from './no-component/no-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieItemsComponent } from './movie-items/movie-items.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RxjxExampleComponent } from './rxjx-example/rxjx-example.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { RxjxAssignComponent } from './rxjx-assign/rxjx-assign.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieeditComponent } from './movieedit/movieedit.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    CounterComponent,
    MovielistComponent,
    ColorComponent,
    TodolistComponent,
    FormsExampleComponent,
    NoComponentComponent,
    HomeComponentComponent,
    MovieItemsComponent,
    MoviecardComponent,
    RxjxExampleComponent,
    RxjxAssignComponent,
    MovieDetailsComponent,
    MovieeditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
