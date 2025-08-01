import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { Lifecycle } from './lifecycle/lifecycle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Lifecycle, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-first-app');

  showLifecycle: boolean = false;

  toggleShowLifecycle() {
    this.showLifecycle = !this.showLifecycle;
  }
}
