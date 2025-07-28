import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  name = 'Stefan';

  users: User[] = [
    {
      id: 1,
      name: 'Ivan',
    },
    {
      id: 2,
      name: 'Pesho',
    },
    {
      id: 3,
      name: 'Gosho',
    },
  ];

  constructor() {
    console.log('Initializing Component');
  }
}
