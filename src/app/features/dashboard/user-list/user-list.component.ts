import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  errorMessage = '';
  loading = false;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => (this.users = data),
        error: () => (this.errorMessage = 'Failed to load users'),
        complete: () => (this.loading = false),
      });
  }
}
