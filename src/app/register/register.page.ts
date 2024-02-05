import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_register_messages = {
    name: [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Name must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Name cannot be more than 20 characters long.' }
    ],
    last_name:[
      { type: 'required', message: 'Last name is required.' },
      { type: 'minlength', message: 'Last name must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Last name cannot be more than 20 characters long.' }
    ],
    email:[
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password:[
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Password cannot be more than 20 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    confirmation_password:[
      { type: 'required', message: 'Confirmation password is required.' },
      { type: 'minlength', message: 'Confirmation password must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Confirmation password cannot be more than 20 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ]
  };

  constructor(
      private formBuilder:FormBuilder,
      private navCtrl:NavController,
      private storage: Storage
    ) { 
      this.registerForm = this.formBuilder.group({
        email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])),
        password: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ])),
        confirmation_password: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ])),
        name: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ])),
        last_name: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]))
      })
    }

  ngOnInit() {
  }

  register(register_data:any): void {
    console.log(register_data);
    // crear el servicio del registro
  }

}
