import { Component } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent {
    title = 'Client List';
    clients: Client[] = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555',
        company: 'ABC Corp',
        website: 'www.abc.com',
        notes: 'This is a test client'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jsmith@mail.com',
        phone: '555-555-5555',
        company: 'XYZ Corp',
        website: 'www.xyz.com',
        notes: 'This is another test client',
    }
    ];
}