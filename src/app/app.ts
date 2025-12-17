import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnderConstruction } from "./components/under-construction/under-construction";

@Component({
  selector: 'app-root',
  imports: [UnderConstruction],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anand-portfolio');
}
