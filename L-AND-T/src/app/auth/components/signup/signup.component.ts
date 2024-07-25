import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../../AngularMaterialModule';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm: FormGroup; 
  hidePassword = true;

  constructor(private fb: FormBuilder){

    this.signupForm = this.fb.group({
      name : [null,[Validators.required]],
      email : [null,[Validators.required, Validators.email]],
      password : [null,[Validators.required, Validators.minLength(6)]],
      confirm_password : [null,[Validators.required]]
    })
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    console.log(this.signupForm.value)
  }


}
