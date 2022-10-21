import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './components/design/footer/footer.component';
import {AnimeTableComponent} from './components/anime/anime-table/anime-table.component';
import {HeaderComponent} from './components/design/header/header.component';
import {MockAnime} from "./mocks/mock-anime";
import {HttpClientModule} from "@angular/common/http";
import { AnimeFormComponent } from './components/anime/anime-form/anime-form.component';
import { AnimeDetailComponent } from './components/anime/anime-detail/anime-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MangaDetailComponent } from './components/manga/manga-detail/manga-detail.component';
import { MangaTableComponent } from './components/manga/manga-table/manga-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AnimeTableComponent,
    HeaderComponent,
    AnimeFormComponent,
    AnimeDetailComponent,
    MangaDetailComponent,
    MangaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MockAnime],
  bootstrap: [AppComponent]
})
export class AppModule { }
