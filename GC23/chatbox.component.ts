import { Component,Input, ViewChild,AfterViewInit,ElementRef } from '@angular/core';
// import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements AfterViewInit{
  @Input() user_id = '';
  @ViewChild('messageBody')
  input!: ElementRef; 
  current_logged_user_id: any; //take from localstorage
  sender_to_receiver :any;
  receiver_to_sender:any;
  all_chats:any; //render in this component.
  username:any;//the user whose chats are open
  constructor(private userauthservice:UserAuthService){

  }

  ngAfterViewInit() {
    let ele =  this.input.nativeElement;
    ele.scrollTop = ele.scrollHeight;
  }
  ngOnInit(){
    this.get_data_of_current_chats();
  }
  get_data_of_current_chats() {
    // Get username
    this.userauthservice.get_username_of_current_chat(this.user_id);
    this.userauthservice.username_of_current_chat.subscribe((result) => {
      this.username = result;
    });
  
    // Get all chats
    this.current_logged_user_id = JSON.parse(localStorage.getItem('user') || '{}')[0].id;
    let current_chat_opened_id = this.user_id;
  
    // Get chats where logged user is sender and current_chat_user is receiver
      this.userauthservice.get_chats1(this.current_logged_user_id, current_chat_opened_id).then(()=>{
          this.userauthservice.chats1.subscribe((result1) => {
            this.sender_to_receiver = result1;
          });
      }).catch((err)=>{
          console.log(err);
      });
     
    // Get chats where logged user is receiver and current_chat_user is sender
      this.userauthservice.get_chats2(current_chat_opened_id, this.current_logged_user_id).then(()=>{
          this.userauthservice.chats2.subscribe((result2) => {
            this.receiver_to_sender = result2;
          });
          this.all_chats = this.sender_to_receiver.concat(this.receiver_to_sender);
          this.all_chats = this.all_chats.sort((a: any, b: any) => (a.timestamp > b.timestamp) ? 1 : -1);
          // console.log(this.all_chats);
          this.ngAfterViewInit();
      }).catch((err)=>{
        console.log(err.value);
      });
   
  }
  reload_chats(){
      this.ngOnInit();
      this.ngAfterViewInit();
  }
  
}
