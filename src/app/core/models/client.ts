import { User } from './user';

export interface Client extends User {
    company: string;
    website: string;
    notes: string;
}