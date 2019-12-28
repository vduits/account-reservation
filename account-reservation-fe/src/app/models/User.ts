import { Role } from './Role';

export interface User{
    uuid?: string;
    role: Role;
    gmail: string;
    discordId?: string;
}