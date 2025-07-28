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
  name: string = 'Stefan';
  isLoggedIn: boolean = false;
  imgUrl: string;

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
    this.imgUrl =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw';
  }

  onGreet($event: any) {
    alert('Hello');
  }
}
