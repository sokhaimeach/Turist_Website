import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostInterface, UserInterface } from '../services/interface';
import { UserService } from '../services/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {
  reversePost: any[] = []
  arr: any[] = []
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
  displayProgress: string = 'none'
  selectedFileName: string = ''
  selectedTextPost: string = ''
  isUpdate: boolean = false
  updateTime: string = ''

  noteUser: any = {}

  heart: string[] = []
  fillHeart: string[] = []

  constructor(private ser: UserService, private ro: ActivatedRoute) { }

  ngOnInit() {
    this.ro.queryParams.subscribe(params => this.noteUser = params)
    this.refresh()
  }

  refresh() {
    const allUser = this.ser.getUserAccount()
    if(Array.isArray(allUser)){
      allUser.forEach(u => {
        if(this.noteUser.name == u.name && this.noteUser.pass == u.password){
          this.user = u
          this.get_bio = this.user?.bio
        }
      })
    }
    this.post = this.ser.getPosts();
    if (this.post && Array.isArray(this.post)) {
      let count = 0
      for(let i = 0; i < this.post.length; i++){
        if(this.post[i].username == this.user?.name){
          this.arr[count] = this.post[i]
          if(this.arr[count]?.lover[0]==this.user?.name){
            this.heart.push('bi bi-heart-fill')
            this.fillHeart.push('red')
          } else {
            this.heart.push('bi bi-heart')
            this.fillHeart.push('black')
          }
          count++
        }
      }
      console.log(this.fillHeart)
    }
    this.reversePost = this.arr.reverse()
    this.heart.reverse()
    this.fillHeart.reverse()
    if (this.user?.star) {
      this.rateStar(this.user?.star)
    }
  }

  editBio() {
    this.user.bio = this.get_bio
    console.log(this.user)
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

  isPost() {
    this.isUpdate = false
    this.selectedTextPost = ''
    this.selectedFileName = ''
  }

  setPost() {
    const data = {
      username: this.user?.name,
      userpic: this.user?.profile,
      date: new Date().toLocaleString(),
      text: this.selectedTextPost,
      lover: [],
      picture: this.selectedFileName,
      comments: []
    }

    this.post.push(data)

    this.ser.setPosts(this.post);
    this.displayProgress = 'flex'
    this.refresh()
  }

  deletePost(dateTime: string) {
    let arr = []
    if (Array.isArray(this.post)) {
      arr = this.post.filter((arr) => arr.date !== dateTime)
    }
    this.ser.setPosts(arr)
    this.displayProgress = 'flex'
    this.refresh()
  }

  transferToControl(dateTime: string) {
    this.isUpdate = true
    this.updateTime = dateTime
    if (Array.isArray(this.post)) {
      this.post.map((po) => {
        if (dateTime == po.date) {
          this.selectedTextPost = po.text
          this.selectedFileName = po.picture
        }
      })
    }
  }

  updatePost(time: string) {
    if (Array.isArray(this.post)) {
      this.post.forEach((po) => {
        if (time == po.date) {
          po.text = this.selectedTextPost
          po.picture = this.selectedFileName
        }
      })
    }
    this.ser.setPosts(this.post)
    this.displayProgress = 'flex'
  }

  likePost(event: Event, dates: string) {
    const like = event.target as HTMLElement
    
    like.style.color = like.style.color=='black'? 'red': 'black'
    if(like.classList.contains('bi-heart')){
      like.classList.remove('bi-heart')
      like.classList.add('bi-heart-fill')
      if(Array.isArray(this.post)){
        for(let i = 0; i< this.post.length; i++){
          if(this.post[i].date == dates){
            this.post[i].lover.push(this.user?.name)
            console.log(this.post[i])
          }
        }
      }
    } else {
      like.classList.add('bi-heart')
      like.classList.remove('bi-heart-fill')
      if(Array.isArray(this.post)){
        for(let i = 0; i< this.post.length; i++){
          if(this.post[i].date == dates){
            this.post[i].lover.pop()
            console.log(this.post[i])
          }
        }
      }
    }

    this.ser.setPosts(this.post)
    this.refresh()
  }
}
