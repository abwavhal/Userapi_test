import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    mobile_number: string;
    address: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
