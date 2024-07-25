import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../AngularMaterialModule';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    AngularMaterialModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
