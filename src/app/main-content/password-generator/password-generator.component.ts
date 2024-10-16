import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {
  password: string[] = [];

  // Defining character sets
  upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  numberChars = '0123456789';
  specialChars = '!@#$%^&*()_+';
  
  // Options for user to select which character sets to include
  includeUpperCase = true;
  includeLowerCase = true;
  includeNumbers = true;
  includeSpecialChars = true;

  // Generates password based on selected options and length
  generatePassword(length: number) {
    let availableChars = '';
    this.password = [];

    // Build the pool of available characters based on user selections
    if (this.includeUpperCase) {
      availableChars += this.upperCaseChars;
    }
    if (this.includeLowerCase) {
      availableChars += this.lowerCaseChars;
    }
    if (this.includeNumbers) {
      availableChars += this.numberChars;
    }
    if (this.includeSpecialChars) {
      availableChars += this.specialChars;
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      this.password.push(availableChars[randomIndex]);
    }

    // Ensure at least one character from each selected group is in the password (optional)
    this.ensureAtLeastOneFromEachGroup();
  }

  // Ensures the password contains at least one character from each selected group
  ensureAtLeastOneFromEachGroup() {
    let guaranteedChars = [];
    if (this.includeUpperCase) {
      guaranteedChars.push(this.upperCaseChars[Math.floor(Math.random() * this.upperCaseChars.length)]);
    }
    if (this.includeLowerCase) {
      guaranteedChars.push(this.lowerCaseChars[Math.floor(Math.random() * this.lowerCaseChars.length)]);
    }
    if (this.includeNumbers) {
      guaranteedChars.push(this.numberChars[Math.floor(Math.random() * this.numberChars.length)]);
    }
    if (this.includeSpecialChars) {
      guaranteedChars.push(this.specialChars[Math.floor(Math.random() * this.specialChars.length)]);
    }

    // Replace random positions in the password with guaranteed characters
    for (let i = 0; i < guaranteedChars.length; i++) {
      const randomPosition = Math.floor(Math.random() * this.password.length);
      this.password[randomPosition] = guaranteedChars[i];
    }
  }
}


