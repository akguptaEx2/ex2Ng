export interface User{
    employee_code:number|null;
    id:number;
    email:string;
    first_name:string;
    last_name?:string;
    role:string
}