import { Component } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anime-Display-Template';

  imageBackgroundParam="assets/images/footer_image.png";

  footerStyles = {
    'background-image': 'url(' + this.imageBackgroundParam + ')',
  };

  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
}
