import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}