import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  constructor( private auth: LoginuserService) { }

  ngOnInit(): void {
  }
  forgotPassword(){
    this.auth.forgotPassword(this.email);
    this.email='';
  }
}
