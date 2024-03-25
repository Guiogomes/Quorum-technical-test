import { ICsvRows } from "./ICsvRows";

export interface ICsvData {
    headers: string[];
    rows: ICsvRows[];
}