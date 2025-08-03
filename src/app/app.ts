import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Discover } from './discover/discover';
import { Top } from './top/top';
import { Stories } from './stories/stories';
import { Highlight } from './highlight/highlight';
import { Inspiration } from './inspiration/inspiration';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Discover, Top, Stories, Highlight, Inspiration, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Turist_Info_Web';
}
