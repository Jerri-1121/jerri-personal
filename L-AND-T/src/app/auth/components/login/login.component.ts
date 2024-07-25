import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../../AngularMaterialModule';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hidePassword = true;
  loginForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.loginForm = this.fb.group({
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required]],
      

  })
}

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
