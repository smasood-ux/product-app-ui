import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-nev',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './main-nev.component.html',
  styleUrls: ['./main-nev.component.scss']
})
export class MainNevComponent {

  constructor(private auth: AuthService) {}

  get loginStatus() : boolean {
    return this.auth.userLoggedIn();
  }

  get currentUserName() : string | undefined {
    return this.auth.currentUserAccount()?.userName;
  }

  logout() {
    this.auth.logoutUser();
  }
}
