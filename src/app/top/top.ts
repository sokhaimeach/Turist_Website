import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  imports: [],
  templateUrl: './top.html',
  styleUrl: './top.css'
})
export class Top {
  place: any[] = [
    {img: 'images/pic_1.webp', title: 'Angkor Wat temple', text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.'},
    {img: 'images/pic_2.jpg', title: 'Angkor Wat temple', text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.'},
    {img: 'images/pic_3.jpg', title: 'Angkor Wat temple', text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.'},
    {img: 'images/pic_1.webp', title: 'Angkor Wat temple', text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.'}
  ];
}
