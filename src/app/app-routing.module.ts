import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AnimeTableComponent} from "./components/anime/anime-table/anime-table.component";

const routes: Routes = [
  { path: '', redirectTo: '/anime-table', pathMatch: 'full' },
  { path: 'anime-table', component: AnimeTableComponent,
    //data: {title: "Anime Library"},
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
