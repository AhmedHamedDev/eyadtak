import { Pagination } from "./Pagination";

export class PatientsSearchCriteria extends Pagination{
    public name: string;
    public email: string;
    public number: string;
    public genderId: number;
}