import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/design/footer/footer.component';
import { AnimeTableComponent } from './components/anime/anime-table/anime-table.component';
import { HeaderComponent } from './components/design/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AnimeTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
