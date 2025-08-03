import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css'
})
export class Stories {
  stories: any[] = [
    {pic: 'images/pic_1.webp', title: 'Angkor wat', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    {pic: 'images/pic_2.jpg', title: 'Angkor wat', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    {pic: 'images/pic_3.jpg', title: 'Angkor wat', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  ]
}
