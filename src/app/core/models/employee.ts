import { User } from './user';

export interface Employee extends User {
    department: string;
    role: string;
    salary: number;
    hireDate: Date;
}