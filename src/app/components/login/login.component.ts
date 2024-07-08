import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(response => {
      console.log('User logged in successfully:', response);
    });
  }
}
