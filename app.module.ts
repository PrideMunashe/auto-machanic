import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component'; // Import HomeComponent here

@NgModule({
  declarations: [
    HomeComponent // Add HomeComponent to the declarations array
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: []
})
export class AppModule {}
