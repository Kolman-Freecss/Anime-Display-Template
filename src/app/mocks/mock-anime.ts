import { Injectable } from '@angular/core';
import {Anime} from "../model/anime";
import {Gender} from "../model/gender";

@Injectable()
export class MockAnime{

    listAnime: Anime[] = [
        new Anime('Boku no Hero', Gender.HORROR, "https://animeflv.net/anime/5148/boku-no-hero-academia-2016", false, 1), //{name: , gender: 'Horror'}
        new Anime('Bleach', Gender.ACTION, "https://animeflv.net/anime/3602/bleach-tv", true, 2),//{name: 'Boku no Hero', gender: 'History'}
    ];

    getMocksAnime(): Anime[]{
        return this.listAnime;
    }

    addAnime(anime: Anime): void{
      if (anime != undefined) {
        // @ts-ignore
        anime.setId(this.listAnime.length + 1);
        this.listAnime.push(anime);
      }
    }

}
