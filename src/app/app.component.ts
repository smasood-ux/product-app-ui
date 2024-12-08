import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNevComponent } from './nav/main-nev.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainNevComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-app';
}
