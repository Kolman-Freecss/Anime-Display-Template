import {Gender} from "./gender";

export class Anime{
    id?: number;
    name: String;
    gender: Gender;
    website: String;
    isFinished: boolean;

    constructor(
        name: String,
        gender: Gender,
        website: String,
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
