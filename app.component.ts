import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CommonModule, RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  schemas: [NO_ERRORS_SCHEMA] // Add this line
})
export class AppComponent {
  title = 'garage';
}
