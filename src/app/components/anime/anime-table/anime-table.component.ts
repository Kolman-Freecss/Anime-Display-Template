import { Component, OnInit } from '@angular/core';
import {ANIME_FORM} from "../../../paths";
import {Router} from "@angular/router";
import {Anime} from "../../../model/anime";
import {AnimeService} from "../../../services/anime.service";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-anime-table',
  templateUrl: './anime-table.component.html',
  styleUrls: ['./anime-table.component.css']
})
export class AnimeTableComponent implements OnInit {

  listAnime : Anime[];
  //animeSelected : Anime;

  constructor(
    private animeService : AnimeService,
    private loggerService : LoggerService,
    private router: Router,
  ) {
    this.listAnime = [];
  }

  ngOnInit() {
    this.getAnimes();

  }

  /*
  onSelect(anime: Anime): void{
    this.animeSelected = anime;
  }
  */

  getAnimes() : void {
    this.loggerService.log("Retrieving the information of Animes");
    this.animeService.getAnimes()
      .subscribe(animes => this.listAnime = animes);
  }

  clickAnimeForm(): void {
    this.router.navigate([ANIME_FORM]);
  }

  deleteAnime(id : number): void {
    this.animeService.deleteAnime(id).subscribe(() => {
      this.listAnime.splice(id, 1);
    });
  }

  generatePDF(): void{
    this.animeService.generatePDF(this.listAnime);
  }

}
