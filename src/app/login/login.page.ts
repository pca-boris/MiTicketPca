import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {
    email:[
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ]
  }
  loginMessage: any;

  constructor(
      private formBuilder:FormBuilder,
      private authService:AuthService,
      private navCtrl:NavController,
    ) {  

    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]))
    });

   }

  ngOnInit() {
  }

  public login(login_data:any): void {
    console.log(login_data);
    this.authService.loginUser(login_data).then((res:any) => {
      console.log(res);
      this.loginMessage = res;
      this.navCtrl.navigateForward('/home');
    }).catch((err:any) => {
      this.loginMessage = err;
    })
  }

}
