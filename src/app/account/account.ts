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
  get_bio: string = ''
  getFeedback: string = ''
  stars: number = 0
  fill_star: any[] = [
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2'
  ]

  constructor(private ser: UserService) {}
  
  ngOnInit() {
    this.user = this.ser.getUserAccount();
    if(this.user?.star) {
      this.rateStar(this.user?.star)
    }
  }

  editBio() {
    this.user.bio = this.get_bio
    this.ser.setUserAccount(this.user);
    this.get_bio = this.user.bio
  }

  rateStar(rate: number){
    this.fill_star = [
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2',
    'bi bi-star text-warning me-2'
  ]
    for(let i = 0; i < rate; i++){
      this.fill_star[i] = 'bi bi-star-fill text-warning me-2'
    }
    this.stars = rate
  }

  SendFeedback() {
    this.user.feedback = this.getFeedback
    this.user.star = this.stars
    this.ser.setUserAccount(this.user)
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
