import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit() {

  }


  loginForm:FormGroup=this.fb.group({
    username:['',Validators.required],
  password:[''],
  });

  authenticate(){
    console.log(JSON.stringify(this.loginForm.value));
    this.http.get('http://localhost:8081/AssetManagement/login?username='+this.loginForm.get('username').value+'&password='+this.loginForm.get('password').value).subscribe(data => {
      console.log(data);
    });
  }

}
