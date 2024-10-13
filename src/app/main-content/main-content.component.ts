import { Component } from '@angular/core';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    PasswordGeneratorComponent,
    
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
