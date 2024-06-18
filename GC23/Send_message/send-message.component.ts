import { Component, ElementRef, Input, ViewChild,Output, EventEmitter  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})

export class SendMessageComponent {
  @Output() refresh_chats = new EventEmitter();
  @Input() id_of_receiver = '';

  @ViewChild("image", { static: false })
  InputVar!: ElementRef;
  SendMsgForm:any;
  filename='';
  constructor(private fb:FormBuilder,private userauthservice:UserAuthService,private http:HttpClient){
  }
  ngOnInit(){
    this.SendMsgForm = this.fb.group({
      message:['',Validators.required]
    });
  }
  send_message(){
    
    if(this.SendMsgForm.invalid){
      return;
    }
    //creating object to add to message::
    
    let new_msg = {
      sender:JSON.parse(localStorage.getItem('user') || '{}')[0].id,
      receiver: this.id_of_receiver,
      timestamp:new Date().toLocaleDateString()+", "+ new Date().toLocaleTimeString(),
      message:this.SendMsgForm.value.message,
      type:"msg"
    }
    this.userauthservice.SendMsgData(new_msg);
    this.SendMsgForm.reset();
    setTimeout(() => {
      this.refresh_chats.emit();
    }, 100);

  }

  // image related code::
  imgname:String = '';
  show_when_img_selected = false;
  Send_mesg_val = 'Send Message';
  button = 'msg';
  onFileSelected(event:any){
    const file:File = event.target.files[0];
    if(file){
      //when the filename is selected 
        // console.log(file.name);
        this.filename = file.name;
        this.show_when_img_selected=true;
        this.Send_mesg_val='Send Image';
        this.button = 'img';
    } 
  } 
  deSelectImage(){
    this.show_when_img_selected=false;
    this.button = 'msg';
    this.InputVar.nativeElement.value = "";
  }
  send_image(){
    let fullpath = "../../assets/images/"+this.filename
    //creating object to add to message::
    let new_msg = {
      sender:JSON.parse(localStorage.getItem('user') || '{}')[0].id,
      receiver: this.id_of_receiver,
      timestamp:new Date().toLocaleDateString()+", "+ new Date().toLocaleTimeString(),
      message:fullpath,
      type:"image"
    }
    this.userauthservice.SendMsgData(new_msg);
    this.SendMsgForm.reset();
    this.show_when_img_selected=false;
    this.button = 'msg';
    this.InputVar.nativeElement.value = "";
  }
  load(){
    this.refresh_chats.emit();
  }
}
