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

  constructor(private ser: UserService) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    // Save name in component and localStorage
    this.selectedFileName = file.name;
    // localStorage.setItem(this.storageKey, file.name);
    this.setUser.profile = 'images/' + file.name;

    // Preview the image
    // const reader = new FileReader();
    // reader.onload = () => this.previewUrl = reader.result as string;
    // reader.readAsDataURL(file);
  }

  Save() {
    this.ser.setUserAccount(this.setUser);
    alert("user create account successfully");
    console.log(this.setUser);
  }

  // ngOnInit(): void {
  //   // Load saved file name if exists
  //   const savedName = localStorage.getItem(this.storageKey);
  //   if (savedName) {
  //     this.selectedFileName = savedName;
  //   }
  // }
}
