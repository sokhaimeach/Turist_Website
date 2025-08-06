import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostInterface, UserInterface } from '../services/interface';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {
  reversePost: any[] = []
  user: any = {} as UserInterface;
  post: any = [] as PostInterface;
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
  selectedFileName: string = ''
  selectedTextPost: string = ''

  constructor(private ser: UserService) { }

  ngOnInit() {
    this.user = this.ser.getUserAccount();
    this.post = this.ser.getPosts();
    this.reversePost = this.post?.reverse()
    this.get_bio = this.user?.bio
    if (this.user?.star) {
      this.rateStar(this.user?.star)
    }
  }

  editBio() {
    this.user.bio = this.get_bio
    this.ser.setUserAccount(this.user);
    this.get_bio = this.user.bio
  }

  rateStar(rate: number) {
    this.fill_star = [
      'bi bi-star text-warning me-2',
      'bi bi-star text-warning me-2',
      'bi bi-star text-warning me-2',
      'bi bi-star text-warning me-2',
      'bi bi-star text-warning me-2'
    ]
    for (let i = 0; i < rate; i++) {
      this.fill_star[i] = 'bi bi-star-fill text-warning me-2'
    }
    this.stars = rate
  }

  SendFeedback() {
    this.user.feedback = this.getFeedback
    this.user.star = this.stars
    this.ser.setUserAccount(this.user)
  }

  getPhoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    this.selectedFileName = 'images/' + file.name;
  }

  setPost() {
    const data = {
        date: new Date().toLocaleString(),
        text: this.selectedTextPost,
        love: 0,
        picture: this.selectedFileName,
        comments: []
      }

    this.post.push(data)

    this.ser.setPosts(this.post);
    alert("post successfully")
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
