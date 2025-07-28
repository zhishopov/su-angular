import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Company } from '../models/company';

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
      company: <Company>{
        name: 'Softuni',
      },
    },
    {
      id: 2,
      name: 'Pesho',
      company: <Company>{
        name: 'Softuni',
      },
    },
    {
      id: 3,
      name: 'Gosho',
      company: <Company>{
        name: 'Softuni',
      },
    },
  ];

  constructor() {
    console.log('Initializing Component');
  }
}
