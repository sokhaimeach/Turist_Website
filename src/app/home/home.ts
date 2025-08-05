import { Component } from '@angular/core';
import { Discover } from '../discover/discover';
import { Top } from '../top/top';
import { Stories } from '../stories/stories';
import { Highlight } from '../highlight/highlight';
import { Inspiration } from '../inspiration/inspiration';
import { Footer } from '../footer/footer';
import { UserInterface } from '../services/interface';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-home',
  imports: [Discover, Top, Stories, Highlight, Inspiration, Footer, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
