import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Router, RouterModule, Routes} from "@angular/router";

const appRouts :Routes = [
  {
    path:'notes',
    component:NotesComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'',
    component:NotesComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
