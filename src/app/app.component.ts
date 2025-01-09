import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientListComponent } from './core/features/client-list/client-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mecoj Solution';
}