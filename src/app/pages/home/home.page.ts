import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  encrypted:string="";
  message:string="";
  enc:string="";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  encrypt(){
    // this.cipher = this.plain;
   
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = letters.split(""); 
const ms = this.message.split(""); 

for (let j = 0; j < ms.length; j++) {
  if(ms[j]===" "){
    this.enc += " ";

  }else{
    for (let i = 0; i < alphabet.length; i++) {
      if (ms[j].toUpperCase()===alphabet[i]) {
        this.enc += alphabet[25 - i] + "";
    }
    }
  }
} 
this.encrypted = this.enc;
this.enc ="";
  }

  decrypt(){
 
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = letters.split(""); 
const ms = this.encrypted.split(""); 

for (let j = 0; j < ms.length; j++) {
  if(ms[j]===" "){
    this.enc += " ";
  }else{
    for (let i = 0; i < alphabet.length; i++) {
      if (ms[j].toUpperCase()===alphabet[i]) {
        this.enc += alphabet[25 - i] + "";    
    }
    }
  }
} 
this.message = this.enc;
this.enc ="";
  }
clearPlain(){
  this.message = "";
  
}
clearEnc(){
  this.encrypted = "";
  
}
copyEnc(){
}
}
