import { Component,AfterViewChecked,ViewChild, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})

export class ChatsComponent {
  current_user_id: any;
  user_id!: string; //change it to number 
  current_chat_open_user_id! :string; 
  friends_data:any;
  username = JSON.parse(localStorage.getItem('user') || "{}")[0].username;
  profile = JSON.parse(localStorage.getItem('user') || "{}")[0].profile;
  profile_section_id :any;
  modalRef:any;
  email = JSON.parse(localStorage.getItem('user') || '{}')[0].email;
  mobile = JSON.parse(localStorage.getItem('user') || '{}')[0].mobile;
  buttonType='edit';
  constructor(private modalService:NgbModal,private route:ActivatedRoute,private userauthservice:UserAuthService,private fb:FormBuilder,private router:Router){
  }
   EditProfile:any;
   disable_input = true;
  // function to scroll to bottom

   ngOnInit():void{

    //getting the id's of friends with whom user talks.
    const user = JSON.parse(localStorage.getItem('user') || '[]');
    const chatsKeys = user[0]?.friends;
    
    //get the data of users with whom user talks on the basis of the above id_array::
    //call a function that is inside the services which will get us the data of users.
    this.current_chat_open_user_id = chatsKeys[0];
    this.userauthservice.get_friends_data(chatsKeys);

    //getting data on routing ::
    this.current_user_id =  this.route.snapshot.paramMap.get('userId');
    this.user_id = this.current_user_id.slice(4);
    this.userauthservice.reloadChats();
    //now let's load the user having the id in the localstorage::
    let localdataString = localStorage.getItem('user') || '{}';
    let localdataArr = JSON.parse(localdataString);
    this.userauthservice.friends_data.subscribe((result)=>{
       this.friends_data = result;
    });

  }


  grey = "transparent";
  select_user_to_chat(id:any){
    //on the based of change the user_id of opened chats.
    // console.log(id);
    this.current_chat_open_user_id = id;
    //selected user should have grey background color::
  }
  //function to load the chat box ::
  open_profile(id_of_profile:any){
     
    this.profile_section_id = id_of_profile;
    this.modalRef =  this.modalService.open(this.profile_section_id,{
      ariaLabelledBy: 'modal-basic-title', 
      size: 'lg', 
      windowClass: 'custom-class'
  }).result.then(()=>{
    //call the api service (already we have data in the localstorage)
    // making form::
    this.EditProfile = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      mobile: ['',Validators.required],
      address: ['',Validators.required,Validators.minLength(50)]
    });
  });

  }
  close(){
     this.modalService.dismissAll();
  }
  editProfile(){
        this.buttonType = 'update';
        this.disable_input = false;
  }
  save_edited_data(){
      //make the api request ::
      let data = {
        username:this.EditProfile.value.username,
        Address:this.EditProfile.value.Address,
        email:this.EditProfile.value.email,
        mobile : this.EditProfile.value.mobile
      }
      this.userauthservice.edit_data(data);
  }
}
