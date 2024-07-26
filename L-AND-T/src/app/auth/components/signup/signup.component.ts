import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../../AngularMaterialModule';
import { AuthService } from '../../services/auth/auth.service';
//import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AngularMaterialModule,

  ],
  providers: [AuthService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
}) 
export class SignupComponent {

  signupForm: FormGroup; 
  hidePassword = true;
  


  constructor(private fb: FormBuilder, private snackbar: MatSnackBar, private router: Router,private authService: AuthService){

    this.signupForm = this.fb.group({
      name : [null,[Validators.required]],
      email : [null,[Validators.required, Validators.email]],
      password : [null,[Validators.required, Validators.minLength(6)]],
      confirm_password : [null,[Validators.required]]
    })
  }
  // ngOnInit(){
  //   this.authService = new AuthService(); // Initialize AuthService instance here
  //   this.signupForm = this.fb.group({
  //     name: [null, [Validators.required]],
  //     email: [null, [Validators.required, Validators.email]],
  //     password: [null, [Validators.required, Validators.minLength(6)]],
  //     confirm_password: [null, [Validators.required]]
  //   });
  // }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    console.log(this.signupForm.value);
    
    const password = this.signupForm.get("password")?.value;
    const confirm_password = this.signupForm.get("confirm_password")?.value;
    if (password !== confirm_password) {
      this.snackbar.open("Password and Confirm Password does not match", "Close", { duration: 5000, panelClass: "error-snackbar" });
      return;
    }

    this.authService.Signup(this.signupForm.value).subscribe((res) => {
      console.log(res);
      if(res.userId != null){
        this.snackbar.open("Signup Successful", "Close", { duration: 5000 });
      this.router.navigateByUrl("/login");
      }else {
        this.snackbar.open("Signup Failed. Try again", "Close", { duration: 5000, panelClass:"error-snackBar" });
      }
    })
  }


}
