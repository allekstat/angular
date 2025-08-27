import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Abc } from "./abc/abc";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Abc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula-26-08-2025');
}
