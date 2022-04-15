import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LoginModel } from './login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
  loginObject:LoginModel = new LoginModel();
  constructor(private fb:FormBuilder,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
getLoginData(){
this.loginObject.username = this.loginForm.value.userName;
this.loginObject.password = this.loginForm.value.password
  this.apiService.getLoginData(this.loginObject).subscribe(data=>{
    if(data){
      console.log('data',data);
      localStorage.setItem('validateKey',data.token)
      alert('Logged SuccessfulLy');
      this.navigateNext()
    }else{
      alert('Plese Check Your Login Credential')
    }
  })
}
navigateNext(){
  this.router.navigate(['/employee-dashboard'])
}
}
