import {Component, Input, OnInit} from '@angular/core';
import {AnimeService} from "../../../services/anime.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {Anime} from "../../../model/anime";

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() anime : Anime | undefined;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAnime();
  }

  getAnime(): void {
    //The JavaScript (+) operator converts the string to a number, which is what a anime id should be.
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.animeService.getAnime(id)
      .subscribe(anime => this.anime = anime);
  }

  goBack(): void {
    this.location.back();
  }

}
