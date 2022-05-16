import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
