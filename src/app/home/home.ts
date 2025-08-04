import { Component } from '@angular/core';
import { Discover } from '../discover/discover';
import { Top } from '../top/top';
import { Stories } from '../stories/stories';
import { Highlight } from '../highlight/highlight';
import { Inspiration } from '../inspiration/inspiration';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Discover, Top, Stories, Highlight, Inspiration, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
