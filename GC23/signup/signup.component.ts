import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  path_profile_to_show = "../../assets/images/profile1.jpg";
  SignupForm: any;
  submitted = false;
  mail_already_registered = false;
  username_already_registered = false;
  constructor(private fb: FormBuilder, private userauthservice: UserAuthService,private http:HttpClient) {

  }
  compareValues(password: string, cpassword: string) {
    return (formGroup: FormGroup) => {
      const password_: any = formGroup.get(password);
      const cpassword_: any = formGroup.get(cpassword);
      if (password_.value !== cpassword_.value) {
        cpassword_.setErrors({ match: true });
      } else {
        cpassword_.setErrors(null);
      }
    };
  }

  ngOnInit() {
    this.SignupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['',Validators.required],
      password: ['', [Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]],
      cpassword: ['', Validators.required], 
      profile: ['', Validators.required]
    },  
      {
        validator: this.compareValues('password', 'cpassword')
      }
      );
  }
  signup() {

    this.submitted = true;
    this.SignupForm.value.profile = this.path_profile_to_show;
    if (this.SignupForm.invalid) {
         return;
    }
    this.userauthservice.signUpData(this.SignupForm.value);
    //after usersignin function check the authentication::
    this.userauthservice.already_registered_email.subscribe((error)=>{
      if(!error){
        this.mail_already_registered=false;
      }else{
        this.mail_already_registered = true;
      }
    });
    this.userauthservice.already_registered_username.subscribe((error)=>{
      if(!error){
        this.username_already_registered=false; 
      }else{
        this.username_already_registered = true;
      }
    });
  }
  onFileSelected(event:any){
    const file:File = event.target.files[0];
    if(file){
        this.path_profile_to_show = "../../assets/images/"+file.name
    } 
  } 
}
