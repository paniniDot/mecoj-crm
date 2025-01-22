import { Component } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})

export class EmployeeListComponent {
    employees: Employee[] = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555',
        department: 'IT',
        role: 'Software Developer',
        salary: 100000,
        hireDate: new Date('2019-01-01'),
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jsmith@mail.com',
        phone: '555-555-5555',
        department: 'HR',
        role: 'HR Specialist',
        salary: 75000,
        hireDate: new Date('2019-01-01'),
    }
    ];
}