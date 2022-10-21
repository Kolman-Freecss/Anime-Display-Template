import {Gender} from "./gender";

export class Anime{
    id?: number;
    name: string;
    gender: Gender;
    website: string;
    isFinished: boolean;

    constructor(
        name: string,
        gender: Gender,
        website: string,
        isFinished: boolean,
        id?: number,
    ){
        id != null ? this.id = id : "";
        this.name = name;
        this.gender = gender;
        this.website = website;
        this.isFinished = isFinished;
    }

    setId?(id: number): void{
        this.id = id;
    }
}
