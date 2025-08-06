import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserInterface } from './services/interface';
import { UserService } from './services/userservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Turist_Info_Web';
  setUser: UserInterface = {} as UserInterface;
  selectedFileName = '';
  previewUrl: string | null = null;
  storageKey = 'lastImageName';
  nextform: string = 'translateX(0px)'
  bordername:string = ''
  borderpass:string = ''

  constructor(private ser: UserService) {}

  onFileChange(event: Event, con: string): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    this.selectedFileName = file.name;
    if(con == 'profile') {
      this.setUser.profile = 'images/' + file.name;
    }
    if(con == 'cover') {
      this.setUser.cover = 'images/' + file.name;
    }
  }

  Save() {
    if(!this.checkForm1()) return;
    if(this.nextform == 'translateX(0px)') {
      this.nextform = 'translateX(-500px)';
    } else if (this.nextform == 'translateX(-500px)') {
      this.nextform = 'translateX(-1000px)';
    }else {
      this.ser.setUserAccount(this.setUser);
      alert("user create account successfully")
      console.log(this.setUser);
      this.nextform = 'translateX(0px)'
    }
  }

  Back() {
    if(this.nextform == 'translateX(-500px)'){
      this.nextform = 'translateX(0px)'
    } else if (this.nextform == 'translateX(-1000px)') {
      this.nextform = 'translateX(-500px)'
    }
  }

  checkForm1() {
    let check = false
    this.bordername = !this.setUser.name ? '1px solid red': '1px solid black'
    this.borderpass = !this.setUser.password ? '1px solid red': '1px solid black'
    if(this.setUser.name && this.setUser.password) {
      check = true
    }
    return check
  }
}
