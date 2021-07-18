import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
<<<<<<< Updated upstream
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
<<<<<<< Updated upstream
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
  declarations: [AppComponent, HomeComponent, CoursesComponent],
  providers: [],
  bootstrap: [AppComponent],
>>>>>>> Stashed changes
})
export class AppModule { }
