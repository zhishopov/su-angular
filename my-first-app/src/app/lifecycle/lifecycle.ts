import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit, OnDestroy {
  constructor() {
    console.log('Constructor: Initialising');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Initialised');
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }
}
