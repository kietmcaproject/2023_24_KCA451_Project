import { Component } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authentic:boolean = false;
  loginForm :any;
  constructor(private userauth:UserAuthService,private fb:FormBuilder ){
      
  }
  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password:['',Validators.required]
    });
  }

  login(){
    this.userauth.loginData(this.loginForm.value)
    //after login function check the authentication::
    this.userauth.Authentic_credentials.subscribe((error)=>{
      if(error){
        this.authentic=false;
      }else{
        this.authentic = true;
      }
    });
  }
}