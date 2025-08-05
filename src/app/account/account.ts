import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInterface } from '../services/interface';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {

  user: any = {} as UserInterface;
  bio: string = ''
  get_bio: string = ''

  editBio() {
    this.bio = this.get_bio == '' ? this.bio : this.get_bio
    this.get_bio = ''
  }

  constructor(private ser: UserService) {}
  
  ngOnInit() {
    this.user = this.ser.getUserAccount();
  }

  tuser: any = {
    profile: 'images/profile.jpg',
    cover: 'images/cover.jpg',
    name: 'Meach Sokhai',
    nickname: '@sokhai',
    password: '1234',
    school: 'Setec institute',
    status: 'Single',
    workplace: 'Work from home',
    bio: 'Try to be success',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente maxime, consectetur doloribus numquam, dolore, itaque quos totam rerum necessitatibus voluptas iusto at amet. Aliquid reiciendis, ipsum culpa laboriosam deserunt excepturi? ',
    post: [
      {
        date: '12 day ago',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt, sequi voluptate nemo reprehenderit aut, tenetur voluptatum magni, itaque odio officiis. Odio, aliquam. Provident alias natus, placeat optio velit sit! ',
        love: '',
        picture: 'images/cover.jpg',
        comments: [
          {
            talker: '',
            talker_name: '',
            comment: ''
          }
        ]
      },
      {
        date: '12 day ago',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt, sequi voluptate nemo reprehenderit aut, tenetur voluptatum magni, itaque odio officiis. Odio, aliquam. Provident alias natus, placeat optio velit sit! ',
        love: '',
        picture: 'images/pic_3.jpg',
        comments: [
          {
            talker: '',
            talker_name: '',
            comment: ''
          }
        ]
      },
      {
        date: '12 day ago',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt, sequi voluptate nemo reprehenderit aut, tenetur voluptatum magni, itaque odio officiis. Odio, aliquam. Provident alias natus, placeat optio velit sit! ',
        love: '',
        picture: 'images/pic_2.jpg',
        comments: [
          {
            talker: '',
            talker_name: '',
            comment: ''
          }
        ]
      },
      {
        date: '12 day ago',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt, sequi voluptate nemo reprehenderit aut, tenetur voluptatum magni, itaque odio officiis. Odio, aliquam. Provident alias natus, placeat optio velit sit! ',
        love: '',
        picture: 'images/profile.jpg',
        comments: [
          {
            talker: '',
            talker_name: '',
            comment: ''
          }
        ]
      },
    ]
  }
}
